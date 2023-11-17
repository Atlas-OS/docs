---
description: All troubleshooting scripts bundled in the AtlasOS playbook
icon: material/script
---

# Những tập lệnh trong Atlas

Atlas đi kèm với một số tập lệnh đơn giản để khắc phục sự cố trong thư mục "Atlas". Các tập lệnh đi kèm này có thể giúp bạn tìm ra nguyên nhân của các vấn đề mà bạn đang gặp phải và đưa Atlas trở lại trạng thái ban đầu.

## :material-network-outline: Mạng

!!! warning "Hãy khởi động lại thiết bị sau khi chạy các tập lệnh"
    Những thay đổi đối với mạng được thực hiện bằng tập lệnh Atlas sẽ không hoạt động đúng cho đến khi bạn khởi động lại thiết bị của mình. Sau khi chạy tập lệnh mạng Atlas, hãy nhớ lưu công việc của bạn và khởi động lại máy tính.

### Đặt lại (reset) mạng

Nếu bạn đang loay hoay với các cài đặt mạng của mình để cố gắng khắc phục hoặc cải thiện chúng thì việc đặt lại chúng về cài đặt mặc định của Windows hoặc Atlas có thể hữu ích.

Nếu bạn gặp sự cố với kết nối mạng sau khi cài đặt Atlas lần đầu tiên, có thể việc đặt lại cài đặt mạng về mặc định của Windows sẽ hữu ích. Sử dụng cài đặt mạng mặc định trong Windows có thể giúp bạn biết rằng liệu những tối ưu hóa mạng của Atlas có phải là nguyên nhân gây ra sự cố Internet của bạn hay không.

Nếu bạn đã thay đổi cài đặt mạng nhưng muốn quay lại sử dụng những cài đặt mạng và tối ưu hóa của Atlas ban đầu, bạn có thể đặt lại cài đặt mạng của mình về mặc định của Atlas. Thao tác này sẽ khôi phục tất cả cài đặt Internet từ bản cài đặt Atlas mới.

## :material-shield-lock-outline: Chế độ An toàn (Safe Mode)

Chế độ an toàn khởi động Windows theo cách rất đơn giản, chỉ với một vài tệp và driver. Nếu sự cố không xảy ra ở chế độ an toàn, điều đó có nghĩa là sự cố đó không phải do cài đặt mặc định hoặc driver cơ bản gây ra. Xem cách Windows hoạt động ở chế độ an toàn có thể giúp bạn tìm ra nguyên nhân sự cố để bạn có thể khắc phục sự cố trên máy tính của mình.

!!! danger "Chế độ an toàn có thể gây nhầm lẫn"
    Chế độ an toàn là trạng thái trong Windows chỉ có những thành phần cần thiết và cơ bản nhất để chạy Windows. Vì vậy, bạn có thể gặp khó khăn về những gì bạn cần làm để vào chế độ an toàn. Bạn không cần phải sử dụng chế độ an toàn trừ khi bạn biết mình đang làm gì hoặc đang làm theo hướng dẫn đáng tin cậy.

    Chế độ an toàn có thể giúp trong việc:

    * Gỡ cài đặt hoặc sửa lỗi driver.
    * Cố gắng diệt virus.

### Chế độ An toàn (Safe Mode)

Chế độ an toàn khởi động máy tính của bạn trong chế độ an toàn mặc định mà chỉ có những driver và file cần thiết để Windows chạy. Bạn sẽ KHÔNG thể kết nối internet ở chế độ này. 

### Chế độ an toàn với Command Prompt (Safe Mode with Command Prompt)

Command Prompt (CMD) có sẵn ở tất cả các chế độ của chế độ an toàn, nhưng "Chế độ an toàn với Command Prompt" chỉ cung cấp cho bạn cửa sổ Command Prompt. Bạn sẽ không có giao diện người dùng để giúp bạn điều hướng hệ thống của mình. Thay vào đó, bạn sẽ có dấu nhắc lệnh cấp quản trị viên (Administrator).

### Chế độ an toàn có kết nối mạng (Safe Mode with Networking)

Chế độ An toàn có Kết nối mạng có chức năng tương tự như chế độ an toàn không có kết nối mạng. Thế nhưng Chế độ an toàn có kết nối mạng sẽ bổ sung thêm driver mạng và dịch vụ bạn cần để kết nối với internet.

## :material-cog-outline: Dịch vụ

*Chúng tôi rất tiếc nhưng tài liệu cho việc này vẫn chưa được viết. Bạn có thể đóng góp cho chúng tôi tại [https://github.com/Atlas-OS/docs](https://github.com/Atlas-OS/docs).*

## :material-brain: Visual C++ Redistributables

Microsoft Visual C++ Redistributables là một phần quan trọng của bất kỳ máy tính Windows nào. Visual C++ Redistributables phải được cài đặt trên máy tính của bạn để nhiều game và phần mềm hoạt động. Đây là lý do tại sao hầu hết các bản Visual C++ Redistributable đã được cài đặt trên Atlas.

Tập lệnh "Reinstall Visual C++ Redistributables" sử dụng một bản đóng gói tất-cả-trong-một của Visual C++ Redistributables có tên là [abbodi1406/vcredist](https://github.com/abbodi1406/vcredist). Điều này sẽ giúp bạn có thể dễ dàng cài đặt các bản Visual C++ Redistributable mới hoặc cài đặt lại những cái bị hỏng.
