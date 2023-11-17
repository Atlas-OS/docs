---
description: An overview of all general configuration options installed by the AtlasOS playbook
icon: material/cog
---

# Cấu hình

Trong phần này, chúng tôi sẽ trình bày danh sách đầy đủ các tùy chọn cấu hình chung có sẵn trong thư mục Atlas. Điều quan trọng cần lưu ý là bạn chỉ nên sửa đổi các cài đặt cấu hình này nếu bạn hiểu đầy đủ về những gì mình đang làm hoặc nếu một quản trị viên yêu cầu bạn làm như vậy một cách cụ thể.

Để biết thêm tùy chọn cấu hình, hãy xem thêm:

- [Cấu hình nâng cao](advanced-configuration.md)
- [Các tinh chỉnh tùy ý](optional-tweaks.md)
- [Cấu hình Windows](windows-settings.md)

Tất cả các tập tin cấu hình được liệt kê ở đây đều nằm trong thư mục `3. Configuration` trong thư mục Atlas trên màn hình chính (Desktop). Nếu bạn đã xóa thư mục, hãy xem [hướng dẫn về cách khôi phục thư mục Atlas](../../../faq-and-troubleshooting/common-questions/atlas-folder-missing.md).

Lưu ý: Để thuận tiện cho bạn trong việc tìm kiếm các thư mục, chúng tôi sẽ giữ tên gốc của các thư mục (bằng tiếng Anh) trong hướng dẫn này. Tất nhiên sẽ có bản dịch tiếng Việt ở bên cạnh nên bạn không cần quá lo lắng đâu 😁.

## Background Apps (Ứng dụng chạy trong nền)

Theo mặc định, chúng tôi tắt các ứng dụng nền trong Windows, tuy nhiên, bạn có thể cần bật tính năng này. Lý do phổ biến để kích hoạt lại là vì game Sea of Thieves. Để bật ứng dụng nền, hãy chạy `Enable Background Apps.reg` trong thư mục `Background Apps` và khởi động lại máy.

## Bluetooth

Bluetooth là một tính năng tích hợp trong Windows cho phép bạn kết nối các thiết bị với máy tính của mình. Trên Atlas, nó đã bị tắt theo mặc định để giúp hệ thống phản hồi nhanh hơn và ít cồng kềnh hơn. Để kích hoạt nó, hãy chạy file `Enable Bluetooth.cmd` trong thư mục `Bluetooth` và khởi động lại máy.

Bạn có thể cần cài đặt driver để Bluetooth hoạt động. [Xem hướng dẫn của chúng tôi tại đây](../../../faq-and-troubleshooting/common-questions/bluetooth-compatibility.md).

## Diagnostics and Troubleshooting (Chẩn đoán và khắc phục sự cố)

Troubleshooting là một tính năng tích hợp sẵn trong Windows, được sử dụng để giúp bạn khắc phục sự cố với máy tính của mình. Trên Atlas, chúng tôi đã tắt tính năng này theo mặc định để tránh bất kỳ chỉnh sửa nào của Atlas bị đặt lại. Để kích hoạt nó chỉ cần chạy file `Enable Troubleshooting.cmd` trong thư mục `Diagnostics and Troubleshooting` và khởi động lại máy.

## Driver Updates (Cập nhật driver)

Khi cài đặt Atlas, bạn có thể chọn giữa Cài đặt driver tự động và Cài đặt driver thủ công. Thư mục này chứa các file để bạn thay đổi giữa mỗi tùy chọn, nếu bạn quyết định làm như vậy khi sử dụng Atlas.

Khi bạn đã chạy lựa chọn mong muốn, hãy khởi động lại thiết bị của bạn để những thay đổi có hiệu lực.

## FSO và Game Bar

Game Bar là một tính năng tích hợp sẵn trong Windows, được sử dụng để ghi màn hình, chụp ảnh màn hình, hiển thị thông tin hiệu suất, v.v. Điều đó dựa vào [Tối ưu hóa toàn màn hình (Fullscreen Optimizations)](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/), hay còn được gọi tắt là FSO.

In Atlas, FSO is enabled by default, but Game Bar is removed. You can enable Game Bar support by using `Enable FSO & Game Bar.reg` and getting Game Bar from the [Microsoft Store](ms-windows-store://review/?ProductId=9NZKPSTSNW4P).

If you want to disable FSO and use [Fullscreen Exclusive](https://wiki.special-k.info/en/SwapChain) instead, run `Disable FSO & Game Bar.reg` and this should fix all issues with the **Disable full-screen optimisations** compatibility option in modern Windows.
## Game Mode

Game Mode is a built-in feature in Windows that aims to make your system work better for gaming-related tasks, but it can also make some games run slower.

It does this by turning off services and background processes which are not needed for gaming. It has been proven that it is not as helpful as it seems to be according to the latest research.

By default, this is turned off, but you can turn it on by running the `Enable Game Mode.reg` file. This can be found in the folder called "Game Mode."

## HAGS

HAGS (Hardware-Accelerated GPU Scheduling) is a built-in feature in Windows that aims to make your system more performant in GPU-intensive tasks, but it may not produce positive results for every system, so you should test it on your system to see for yourself.

## Lanman Workstation (SMB)

Lanman Workstation (SMB) is a built-in feature in Windows which is used to connect to other computers that are on the same network. On Atlas, it has been disabled by default to make the system more responsive and less bloated. To enable it run the `Enable Lanman Workstation.cmd` file in the `Lanman Workstation (SMB)` folder.

## Network Discovery

Network Discovery is a built-in feature in Windows which is used to discover other computers on your network. On Atlas, we have enabled it by default. To disable it just run the `Disable Network Discovery Services.cmd` file in the `Network Discovery` folder and restart.

### File Sharing
File Sharing is a part of Network Discovery and by default is disabled. If you wish to send files across your local connection to other Windows devices, run the `Enable File Sharing.cmd` file in the `File Sharing` folder and restart.

### Network Navigation Pane
Network Navigation pane is a part of network discovery and controls whether the "Network" options show in the File Explorer. If you want to see the Network Pane, run the `User Network Navigation Pane choice.reg` file in the `Network Navigation Pane` folder and restart.

## Notifications

Notifications are a built-in feature in Windows which are used to show you notifications. On Atlas, we have enabled them by default. If you wish to disable them, run the `Disable Notifications.cmd` file in the `Notifications` folder and restart.

## Power

The Power folder is a folder that allows you to manage power-related settings.

### CPU Idle

Disabling idle reduces jitter and increases responsiveness as the CPU is forced to operate at C-State 0 which prevents the CPU clocks constantly fluctuating and eliminates the latency penalty introduced from the time taken to restore and transition to a higher C-State.

The drawbacks of forcing the CPU to operate at C0 are increased power consumption and higher temperatures, so it is not recommended to disable idle if you leave your PC running for extended durations, have inadequate cooling, uncontrolled voltages or a laptop.

### Hibernation

Hibernation is a feature in Windows that allows you to put your computer to sleep. It temporarily saves all of the current memory/RAM onto your disk, in case of power loss.

Hibernation is disabled by default due to the potential stability issues it can cause, but you can enable it by running the `Enable Hibernation.cmd` in the `Hibernation` folder.

### Power Saving

In this folder, you will find two files that can either enable or disable power saving. These files not only control the power scheme but also have an impact on other settings that can affect power consumption, thus altering your system's performance.

If you wish to modify your choice after installation, you can do so through the registry files provided in this folder.

### Timer Resolution

Increasing the timer resolution improves precision, which is beneficial for applications that require consistent pacing or sleeping, such as multimedia applications and framerate limiters. This is at the cost of increased power consumption and is not always beneficial for all machines.

## Printing

Printing is a built-in feature in Windows which is used to print documents. On Atlas, we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Printing.cmd` file in the `Printing` folder and restart.

## Search Indexing

Search Indexing is a built-in feature in Windows which is used to index files on your computer. On Atlas, we have disabled it by default to make the system more responsive and less bloated. To enable it just run the `Enable Search Indexing.cmd` file in the `Search Indexing` folder and restart.

## Start Menu

The start menu folder stores start menu-related configuration options.

The `Install Open-Shell.cmd` file is there so you can install Open-Shell. You can find more information about it [here.](https://github.com/Open-Shell/Open-Shell-Menu)

The `Atlas Open-Shell Preset.xml` file is a pre-made preset which we recommend using for Open-Shell, but you can still change the suggested settings to your liking.

## System Restore

System Restore is a final resort when it comes to taking snapshots of your machine. By default, it's enabled but you can disable it by running `Disable System Restore.reg` in the `System Restore` folder followed by a system reboot.

## VPN

A VPN (Virtual Private Network) is a feature in Windows that lets you connect to the internet more securely and privately. On Atlas, it's enabled by default for compatibility reasons and due to the services & and drivers being set to manual. To disable it, run the `Disable VPN support.cmd` file in the `VPN` folder.

## Visual Effects

Windows enables various Visual Effects by default. These include animated menus tooltips, and animations while minimizing and maximizing, all of these enhance the appearance of Windows but can slightly reduce performance.

On Atlas, visual effects are disabled by default. To restore these effects, run the `Default Windows Visual Effects.cmd` file in the `Visual Effects` folder.
