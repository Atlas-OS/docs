---
description: A guide on how to configure and install NVIDIA GPU drivers in AtlasOS
icon: simple/nvidia
---

# Cài đặt driver cho card đồ họa NVIDIA

Chúng tôi khuyến khích sử dụng NVCleanstall vì nó là một ứng dụng thay thế cho việc gỡ bỏ những thành phần không cần thiết theo cách thủ công.

## :simple-nvidia: Cài đặt driver

- Tải xuống [NVCleanstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall).
- Mở phần mềm lên và nhấn ``Next``.
- Hãy đảm bảo rằng chỉ có ``Display Driver`` được chọn và nhấn ``Next``.
- Sau khi tải driver về, hãy tick chọn vào các phần sau:
    - Disable Installer Telemetry & Advertising
    - Perform a Clean Installation
    - Disable [Multiplane Overlay (MPO)](https://docs.atlasos.net/getting-started/post-installation/drivers/gpu/amd/#disable-multi-plane-overlay-mpo)
    - Disable Driver Telemetry in ``Show Expert Tweaks``
    - Use method compatible with Easy-Anti-Cheat
    - Automatically accept the "driver unsigned" warning
- Nhấn ``Install`` và tiếp tục cài đặt driver NVIDIA như bình thường.

## :material-cog: Thiết lập NVIDIA Control Panel

Phần này được dựa trên một phần của [AMIT's documentation](https://github.com/amitxv/PC-Tuning/blob/main/docs/configure-nvidia.md)

- Mở NVIDIA Control Panel bằng cách nhấn chuột phải trên màn hình chính (Desktop).
- Vô hiệu hóa ``Desktop > Show Notification Tray Icon``
- Cấu hình các mục sau trong trang ``3D Settings -> Manage 3D settings``:
    - Anisotropic filtering - Off
    - Antialiasing - Gamma correction - Off
    - Low Latency Mode - On (Cài đặt này giới hạn các khung được kết xuất trước ở mức 1)
    - Power management mode - Prefer maximum performance
    - Shader Cache Size - Unlimited
    - Texture filtering - Quality - High performance
    - Threaded Optimization - Giảm tải các tác vụ xử lý liên quan đến GPU lên trên CPU, điều này thường ảnh hưởng đến tốc độ khung hình (FPS). Nếu CPU của bạn bị "nghẽn cổ chai", hãy chọn ``Off``.
    - Vertical sync - Off
- Cấu hình các mục sau trong trang ``Display -> Change resolution``:
    - Lựa chọn độ phân giải và tần số quét của bạn.
    - Output dynamic range - Full
    - Output color depth - Giá trị phù hợp với thông số kỹ thuật màn hình của bạn
- Nếu muốn bạn có thể tăng mức độ ``Digital vibrance`` (độ tương phản kĩ thuật số) trong ``Display -> Adjust desktop color settings`` vì nó quản lý độ bão hòa và cường độ màu sắc, đồng thời có thể làm giảm mỏi mắt.
    - Ngoài ra bạn có thể sử dụng [VibranceGUI](https://vibrancegui.com).
- Cấu hình các mục sau trong trang ``Display -> Adjust desktop size and position``:
    - Select a scaling mode - No scaling
    - Perform scaling on - Display
- Đặt dynamic range thành ``Full`` trong ``Video -> Adjust video color settings -> Advanced``

## :material-numeric-0: Buộc trạng thái P-State 0 (nâng cao)

!!! danger "Chú ý"
    Điều này sẽ bắt buộc trạng thái P-State 0 trên card NVIDIA của bạn **MỌI LÚC**, khiến cho nó luôn chạy ở mức điện năng cao nhất. Bạn không nên thiết lập nó nếu bạn để máy tính ở chế độ chờ trong thời gian dài, có hệ thống tản nhiệt kém hoặc sử dụng laptop.

Driver NVIDIA buộc trạng thái nguồn cho nhân CUDA không phải xử lí các tác vụ đồ họa trong thời gian thực về trạng thái nguồn P2 thấp hơn thay vì trạng thái P0 tối đa. Sự khác biệt giữa hai trạng thái là xung nhịp bộ nhớ thấp hơn, thế nhưng xung nhịp lõi ở cả hai trạng thái thì vẫn giống hệt nhau [[1](https://github.com/djdallmann/GamingPCSetup/blob/master/CONTENT/RESEARCH/WINDRIVERS/README.md#q-is-there-a-registry-setting-that-can-force-your-display-adapter-to-remain-at-its-highest-performance-state-pstate-p0), [2](https://forums.developer.nvidia.com/t/one-weird-trick-to-get-a-maxwell-v2-gpu-to-reach-its-max-memory-clock/40153)].

P-State 0 có thể được đặt bằng cách sử dụng lệnh sau trong Command Prompt được chạy với tư cách quản trị viên (Administrator):
```bat
for /f "tokens=*" %a in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}" /t REG_SZ /s /e /f "NVIDIA" ^| findstr "HK"') do (reg add "%a" /v "DisableDynamicPstate" /t REG_DWORD /d "1" /f)
```

Sau khi chạy lệnh này, tải và giải nén [NVIDIA Profile Inspector](https://github.com/Orbmu2k/nvidiaProfileInspector). Mở công cụ, kéo xuống phần ``5 - Common`` và đặt ``CUDA - Force P2 State`` về OFF. Nhấn ``Apply changes`` ở góc trên bên phải và đóng ứng dụng. Khởi động lại thiết bị của bạn.
