package main

import (
	"archive/zip"
	"bytes"
	"flag"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
)

var (
	github    bool
	site      bool
	token     string
	uploadURL string
)

func main() {
	flag.BoolVar(&github, "github", false, "github")
	flag.BoolVar(&site, "site", false, "site")
	//flag.StringVar(&token, "token", "", "token")
	//flag.StringVar(&uploadURL, "uploadURL", "", "uploadURL")
	flag.Parse()
	token = os.Getenv("AUTH_TOKEN")
	uploadURL = os.Getenv("UPLOAD_URL")
	if !github && !site {
		println("未指定参数 github 或 site")
		os.Exit(1)
	} else if token == "" {
		println("未指定参数 token")
		os.Exit(1)
	} else if uploadURL == "" {
		println("未指定参数 uploadURL")
		os.Exit(1)
	}
	wd, err := os.Executable()
	if err != nil {
		println(err.Error())
		os.Exit(1)
	}
	wd, _ = filepath.Split(wd)
	//wd = "E:\\SWT\\gopath\\src\\github.com\\energye\\energye.github.io"
	println("current path:", wd)
	var (
		src     string
		destZip string
	)
	if github {
		src = filepath.Join(wd, "docs")
		destZip = filepath.Join(wd, "docs.zip")
	} else if site {
		src = filepath.Join(wd, "site")
		destZip = filepath.Join(wd, "site.zip")
	}
	println("src:", src)
	println("destZip:", destZip)
	if github {
		UploadSiteFTP(src)
	}
	if site {
		err = CompressDocs(src, destZip)
		if err != nil {
			println(err.Error())
			os.Exit(1)
		}
		UploadSiteZip(destZip)
	}
}

func UploadSiteFTP(srcZipFilePath string) {
	println("upload site: ftp")
}

// UploadSiteZip 上传ZIP网站
func UploadSiteZip(srcZipFilePath string) {
	println("upload site: energy server")
	transport := &http.Transport{
		DisableKeepAlives: true,
	}
	client := &http.Client{Transport: transport}
	bodyBuf := &bytes.Buffer{}
	bodyWriter := multipart.NewWriter(bodyBuf)

	//非文件入参
	bodyWriter.WriteField("token", token)
	file, err := os.Open(srcZipFilePath)
	if err != nil {
		println("error open zip file:", err.Error())
		return
	}

	//文件入参
	fileWriter, err := bodyWriter.CreateFormFile("site", file.Name())
	if err != nil {
		println("error CreateFormFile:", err.Error())
		return
	}
	_, err = io.Copy(fileWriter, file)
	if err != nil {
		println("error io copy:", err.Error())
		return
	}
	err = bodyWriter.Close()
	if err != nil {
		println("error body write:", err.Error())
		return
	}
	//创建请求
	req, err := http.NewRequest(http.MethodPost, uploadURL, bodyBuf)
	if err != nil {
		println("error new request:", err.Error())
		return
	}
	req.Header.Set("Content-Type", bodyWriter.FormDataContentType())
	// 发送post请求
	response, err := client.Do(req)
	if err != nil {
		println("error send request:", err.Error())
		return
	}
	defer response.Body.Close()
	//处理响应
	data, err := ioutil.ReadAll(response.Body)
	if err != nil {
		println("error response:", err.Error())
		return
	}
	println("data:", string(data))
}

// CompressDocs 压缩至ZIP
func CompressDocs(src string, dest string) error {
	println("upload site: compress docs")
	zipfile, err := os.Create(dest)
	if err != nil {
		return err
	}
	defer zipfile.Close()

	archive := zip.NewWriter(zipfile)
	defer archive.Close()
	err = filepath.Walk(src, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}
		header.Name = filepath.ToSlash(path[len(src):])
		if info.IsDir() {
			header.Name += "/"
		} else {
			file, err := os.Open(path)
			if err != nil {
				return err
			}
			defer file.Close()
			writer, err := archive.CreateHeader(header)
			if err != nil {
				return err
			}
			_, err = io.Copy(writer, file)
			if err != nil {
				return err
			}
		}
		return err
	})
	return err
}
