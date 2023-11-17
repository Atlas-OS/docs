---
description: Getting started with installing drivers for AtlasOS
icon: material/progress-download
---

# Driver? Tôi nên bắt đầu từ đâu? 

Nếu bạn đã cài đặt AtlasOS thông qua phương pháp Cài đặt driver thủ công, hướng dẫn này sẽ là trợ thủ đắc lực giúp bạn thiết lập hệ thống của mình với tất cả các driver mà bạn có thể cần.

## :material-emoticon-confused-outline: Tôi cần những driver nào?

Điều quan trọng là chỉ cài đặt driver cần thiết cho phần cứng hiện không hoạt động đúng cách. Điều này bao gồm driver GPU, driver âm thanh, driver Wi-Fi và driver Bluetooth.

Nếu không chắc chắn về hãng và driver cần thiết cho từng thiết bị phần cứng, bạn có thể tra cứu phần cứng của mình để xác định tên của các driver cụ thể rồi cài đặt chúng cho phù hợp.

## :material-cogs: Driver cho card đồ họa (GPU/iGPU)
Chúng tôi khuyên bạn không nên cài đặt driver card đồ họa của mình qua SDIO vì chúng có thể bị lược bỏ quá nhiều thứ. Chúng tôi đã bao gồm hướng dẫn cài đặt cho các hãng card đồ họa phổ biến bên dưới:

* [NVIDIA](../drivers/gpu/nvidia.md)
* [AMD](../drivers/gpu/amd.md)
* [Intel](../drivers/gpu/intel.md)

## :material-screwdriver: Snappy Driver Installer Origin (SDIO)

Snappy Driver Installer Origin (SDIO) có thể giúp bạn tìm driver tương thích với phần cứng của bạn. SDIO quét hệ thống của bạn để tìm driver bị thiếu hoặc cũ và cài đặt những driver mới nhất cho bạn.

1. Truy cập [trang web của họ](https://www.glenn.delahoy.com/snappy-driver-installer-origin) và tải xuống trình cài đặt trong phần "Download Application".
2. Giải nén file .zip và mở file ``x64``. Thực hiện theo các bước trong trình hướng dẫn.
    * Bản x64 là bản duy nhất hoạt động với Atlas.
    * Khi được hỏi, hãy chọn "Download indexes only". Nếu không, nó sẽ tải xuống các driver vô dụng và không cần thiết.
3. Đợi SDIO tải xuống các chỉ mục.
4. Chọn driver để cài đặt và nhấn "Install" ở bên trái.
