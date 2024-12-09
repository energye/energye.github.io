# CEF and system architecture support

With the release of a new version of CEF (Chromium Embedded Framework), some older operating systems and specific architectures are no longer officially supported.
This means that the new CEF version will not provide compatibility or security updates for these environments.

Therefore, energy no longer supports the operating system and specific architecture of CEF, and has made some versions of support.

### Affected operating systems and architectures include, but are not limited to

#### Not supported operating systems and architectures

-  Windows XP SP3
-  Windows 7, 8/8.1 and Windows Server 2012
-  Linux x86
-  Other non-mainstream architectures: such as PowerPC, SPARC, etc
-  Remove Flash

### Operating systems and architectures supported by energy

| OS                    | 32-bit | 64-bit | Minimum Supported Versions           |  
|-----------------------|--------|--------|--------------------------------------|
| Windows               | ️✔️    | ️✔️    | Win32 XP SP3, 7, 8/8.1, 2012, 10, 11 |
| Windows ARM           | ️❌️    | ️❌️    | -                                    |
| MacOSX (Intel)        | ❌      | ️✔️    | Cocoa 64-bit 10.15                   |
| MacOS (Apple Silicon) | ❌      | ️✔️    | Cocoa ALL                            |
| Linux                 | ️✔️    | ️✔️    | GTK2 GTK3                            |
| Linux ARM             | ️✔️    | ️✔️    | GTK2 GTK3                            |

#### Special release support

| OS                     | CEF         |
|------------------------|-------------|
| Windows XP SP3         | 49.0.2623   |
| Windows 7, 8/8.1, 2012 | 109.1.18    |
| Linux x86              | 101.0.18    |


| Flash  | CEF      |
|--------|----------|
| ALL OS | 89.0.18  |

### Version detail

| ENERGY - CEF  | Windows XP | Windows 7, 8/8.1, 2012 | Windows 10, 11 | MacOS 64-bit | MacOS ARM64 | Linux 32-bit | Linux 64-bit | Linux ARM | Linux ARM64 |
|---------------|------------|------------------------|----------------|--------------|-------------|--------------|--------------|-----------|-------------|
| Latest        | ️❌         | ️❌                     | ️✔️   ️        | ✔️           | ✔️          | ❌            | ✔️           | ✔️        | ✔️          |
| 109.1.18      | ❌          | ✔️                     | ✔️             | ✔️           | ✔️          | ❌            | ✔️           | ✔️        | ✔️          |
| 101.0.18      | ❌          | ✔️                     | ✔️             | ✔️           | ✔️          | ✔️           | ✔️           | ✔️        | ✔️          |
| 89.0.18 Flash | ❌          | ✔️                     | ✔️             | ✔️           | ✔️          | ✔️           | ✔️           | ✔️        | ✔️          |
| 49.0.2623     | ✔️         | ✔️                     | ✔️             | ❌            | ❌           | ❌            | ❌            | ❌         | ❌           |

