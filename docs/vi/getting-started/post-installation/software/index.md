---
title: Cài đặt phần mềm
description: The recommended way to install software in AtlasOS
icon: material/download
---

# Cài đặt phần mềm

Bạn nên sử dụng các gói phần mềm để cài đặt phần mềm. Tuy nhiên, nếu không muốn sử dụng chúng thì bạn có thể cài đặt phần mềm trực tiếp từ Internet thông qua những nguồn chính thức, giống như bạn thường làm.

Trong trường hợp này, chúng ta sẽ sử dụng `winget`. Đây cũng là trình cài đặt được cài đặt sẵn trên mọi máy tính.

## :material-package-down: Trình quản lý gói Windows (Windows Package Manager) là cái gì thế?

WinGet là trình quản lý gói Windows mặc định được Microsoft cài đặt thông qua App Installer trên Microsoft Store, với kho phần mềm do cộng đồng đóng góp. Nó giống như apt-get và Homebrew trên Linux và macOS. Nó cho phép bạn cài đặt phần mềm trên máy tính từ dòng lệnh.

## :material-shape-plus-outline: Cài đặt phần mềm với WinGet

Bạn có thể cài đặt phần mềm chúng tôi đã liệt kê bằng WinGet bằng cách truy cập thư mục `1. Software` và chạy tệp lệnh `Install Software.ps1` trong thư mục Atlas.

Ngoài ra, bạn có thể cài đặt phần mềm bằng cách gõ `winget install <tên gói tệp>` trong dòng lệnh (Command Line). Bạn có thể tìm tên của các gói tệp trên trang web [winget.run](https://winget.run).
