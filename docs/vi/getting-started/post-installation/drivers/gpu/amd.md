---
description: A guide on how to configure and install AMD GPU drivers in AtlasOS
icon: simple/amd
---

# Cài đặt driver cho card đồ họa AMD

Chúng tôi khuyến khích sử dụng RadeonSoftwareSlimmer vì nó là một ứng dụng mã nguồn mở thay thế cho việc gỡ bỏ những thành phần không cần thiết theo cách thủ công.

## :simple-amd: Cài đặt driver

- Tải xuống driver WHQL mới nhất được đề xuất từ [Trang hỗ trợ và trình điều khiển AMD](https://www.amd.com/en/support).
- Tải xuống [RadeonSoftwareSlimmer](https://github.com/GSDragoon/RadeonSoftwareSlimmer) với tên ``RadeonSoftwareSlimmer_XXX_net48.zip``.
- Mở ứng dụng và đi đến tab ``Pre Install``.
    - Chọn tập tin cài đặt của bạn bằng cách nhấp vào ``Browse`` và sau đó xác nhận bằng cách nhấp đúp vào ``Next``.
- Sau quá trình giải nén, bỏ tick mọi thứ trong tab ``Packages`` ngoại trừ:
    - AMD Display Driver
    - AMD Settings (Required for Radeon Software)
    - Các phần mềm này có thể được yêu cầu cho âm thanh của màn hình:
        - AMD Audio CoProcessor Bus Driver
        - AMD Audio filter driver
        - AMD HDMI Audio driver
        - AMD High Definition Audio Controller
        - AMD Streaming Audio Filter Driver
- Bỏ tick mọi thứ trong tab ``Scheduled Tasks``.
- Bỏ tick mọi thứ trong phần ``Display Driver Components``. Nếu bạn đang sử dụng âm thanh từ màn hình, đừng xóa ``High Definition Audio Bus``.
- Chọn ``Modify Installer`` và ``Run Installer``, và sau đó tiếp tục cài đặt driver như bình thường.

## :material-cog: Thiết lập Radeon Software

- Mở Radeon Software bằng cách nhấn chuột phải vào màn hình chính (Desktop)
- Chấp nhận các điều khoản và nhấp vào biểu tượng Cài đặt (Settings) ở trên cùng bên phải.
- Cấu hình các mục sau trong tab ``Graphics``:
    - Wait for Vertical Refresh - Always Off
    - Texture Filtering Quality - Performance
    - Tessellation Mode - Override application settings
    - Maximum Tessellation Level - Off
- Cấu hình các mục sau trong tabe ``Display``:
    - AMD FreeSync - Nó có khả năng tăng độ trễ đầu vào do phải xử lý thêm. Trải nghiệm của bạn có thể thay đổi vì nó được cho là đã được cải thiện theo thời gian.
    - GPU Scaling - Off
    - Color Depth - Giá trị phù hợp với thông số kỹ thuật của màn hình của bạn
- Vô hiệu hóa tất cả các cài đặt trong tab ``Hotkeys`` và tab ``Preferences``.
- Cấu hình độ phân giải và tần số quét của bạn bằng cách chạy lệnh sau trong ++windows+r++:
```
rundll32 display.dll,ShowAdapterSettings 0
```
- Vô hiệu hóa các dịch vụ và driver AMD còn sót lại. Thông thường thì sẽ là dịch vụ ``AMD Crash Defender`` và ``AMD External Events Utility`` (cần thiết cho VRR).

## :material-desktop-tower: Vô hiệu hóa Multi-Plane Overlay (MPO)

Việc tắt Multi-plane Overlay (MPO) có thể khắc phục một số ứng dụng máy tính bị nhấp nháy hoặc giật hình, có thể xảy ra trong quá trình phát video bằng cách sử dụng khả năng tăng tốc phần cứng với trình duyệt. Màn hình đen có thể xảy ra khi chuyển tab từ game hoặc ứng dụng sang trình duyệt có video lặp đi lặp lại. Một số ứng dụng dành cho máy tính có thể nhấp nháy hoặc giật hình khi thay đổi kích thước cửa sổ trên một số máy tính.

MPO có thể được vô hiệu hóa bằng cách chạy lệnh sau trong Command Prompt (CMD) (đảm bảo bạn chạy CMD với tư cách quản trị viên Administrator):
```bat
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Dwm" /v "OverlayTestMode" /t REG_DWORD /d "5" /f
```

## :material-numeric-0: Buộc trạng thái P-State 0 (nâng cao)

*Chúng tôi rất tiếc nhưng tài liệu cho việc này vẫn chưa được viết. Bạn có thể đóng góp tại [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*
