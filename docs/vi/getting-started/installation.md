---
title: Cài đặt
description: The official AtlasOS playbook installation guide
icon: material/cogs
---

# :material-package-down: Cài đặt AtlasOS

!!! danger "Hãy đọc trước khi bắt đầu"

    AtlasOS tuân thủ với điều khoản của Windows; việc kích hoạt bản quyền Windows không bị chỉnh sửa bởi AtlasOS.

    Chúng tôi khuyên bạn nên xem qua [những câu hỏi thường gặp](../faq-and-troubleshooting/removed-features.md).

## :material-clipboard-list-outline: Yêu cầu

- Thiết bị của bạn cần đáp ứng yêu cầu hệ thống cho [Windows 11](https://www.microsoft.com/en-gb/windows/windows-11-specifications#table1) hoặc [Windows 10](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2)
    - Điều này không bao gồm tài khoản Microsoft, TPM và Secure Boot
- CPU 64-bit ([làm thế nào để kiểm tra](https://support.microsoft.com/en-us/windows/which-version-of-windows-operating-system-am-i-running-628bec99-476a-2c13-5296-9dd081cdd808))
    - 64-bit ARM (aarch64) chỉ được hỗ trợ trên Windows 11
- Một kết nối mạng ổn định

## :material-disc: Tải xuống file ISO

Một file ISO là một file đĩa ảo, giống như một chiếc đĩa DVD mà chúng ta dùng để cài đặt lại Windows trong những cách được khuyến nghị của chúng tôi.

Trình tải xuống có trong hướng dẫn dưới đây sẽ tạo một link tải file ISO từ Microsoft. Nó sẽ tải phiên bản mới nhất của Windows dành cho CPU Intel và AMD.

**Được dựa trên:** [Microsoft Software Download Listing](https://github.com/massgravel/msdl)

<!--
    This is based upon the Microsoft Software Download Listing website by massgravel on GitHub.
-->
<!--
    The JavaScript file that is used with this is licensed under GNU Affero General Public License v3.0,
    per the original project. https://github.com/massgravel/msdl/blob/main/LICENSE
-->
<!--
    See the JavaScript: https://raw.githubusercontent.com/Atlas-OS/docs/master/docs/javascripts/msdl.js
-->

??? grey-tip "Những cách thay thế"
    === "Windows Media Creation Tool"
        !!! warning "Windows 11"
            Atlas chỉ hỗ trợ Windows 10 22H2 và Windows 11 23H2.

            Công cụ Media Creation Tool cho Windows 11 chỉ tải xuống phiên bản 22H2, vì vậy Media Creation Tool cho Windows 11 hiện tại không thể sử dụng được cho Atlas.

        1. Tải xuống [Windows 10](https://go.microsoft.com/fwlink/?LinkId=691209) Media Creation Tool và chạy.
        2. Nhấn nút `Accept` để đồng ý với điều khoản của Microsoft.
        3. Tick chọn `Create installation media (USB flash drive, DVD, or ISO file) for another PC`, chọn `Next`, và sau đó chọn:
            * Language: Ngôn ngữ bạn muốn
            * Edition: Windows 10
            * Architecture: 64-bit (x64)
        4. Nhấn vào lựa chọn `ISO file` và lựa chọn nơi lưu file.
        5. Sau khi hoàn tất, nhấn `Finish` để kết thúc trình cài đặt.

<center class="centerMsdl">
<div class="msdl-button-container">
    <button class="msdl-button" style="margin-right: 2px" onclick="getWindows(2860);">Tải xuống Windows 11 x64</button>
    <button class="msdl-button" style="margin-left: 2px" onclick="getWindows(2618);">Tải xuống Windows 10 x64</button>
</div>

<div id="msdl-ms-content"></div>

<div id="msdl-please-wait">
    <p>Vui lòng chờ...</p>
</div>

<div id="msdl-processing-error">
    <p>Một lỗi đã xảy ra trong khi xử lý yêu cầu của bạn. Hãy thử tải lại trang hoặc sử dụng cách thay thế.</p>
    <p id="msdl-error-code">Lỗi: Không xác định</p>
</div>

<div id="msdl-download">
    <p>Quá trình tải xuống sẽ sớm được bắt đầu, nếu không, <a id="msdl-download-link" href="about:blank">bấm vào đây tải ISO</a>.</p>
</div>

<input id="msdl-session-id" type="hidden">
</center>

## :material-download: Chuẩn bị

Các bước sau đây cho rằng bạn có một ổ đĩa riêng để lưu trữ các file cài đặt của Atlas trong quá trình cài đặt lại Windows. Nếu bạn chỉ có một ổ đĩa, hãy làm theo các bước trong phần "Chỉ có một ổ đĩa để lưu trữ file?" bên dưới để tạo một ổ đĩa mới từ ổ đĩa đơn của bạn.

??? question "Chỉ có một ổ đĩa để lưu trữ file?"

    !!! tip "Gợi ý"
        Nếu bạn gặp bất cứ vấn đề gì với Disk Management, bạn cũng có thể sử dụng [Macroit Partition Expert Free Edition](https://macrorit.com/partition-magic-manager/free-edition.html).

    1. Mở Disk Management bằng cách nhập `diskmgmt.msc` vào cửa sổ Run (Win + R), và tìm đến ổ đĩa Windows của bạn.
    2. Nhấn chuột phải vào phân vùng tạm và chọn 'Delete Volume'.
    3. Nhập `4000` trong số lượng không gian để thu nhỏ ổ đĩa (trong megabytes), tức là 4GB
    4. Bây giờ bạn sẽ có một khoảng trống 'Unallocated', nhấn chuột phải và chọn :material-arrow-right: 'New Simple Volume'
    5. Làm theo trình hướng dẫn, bạn có thể cứ nhấn 'Next' là xong

    Sau khi làm theo các bước này, bạn sẽ có một phân vùng ổ đĩa mới trong File Explorer. Bạn có thể tiếp tục với phần còn lại

    <h3>:material-harddisk-remove: Xóa phân vùng tạm thời</h3>

    1. Nhấn chuột phải :material-arrow-right: chọn `Delete volume`
    2. Nhấn chuột phải vào ổ đĩa Windows của bạn :material-arrow-right: chọn `Extend volume`
    3. Làm theo trình hướng dẫn, bạn có thể cứ nhấn 'Next' là xong

Đầu tiên, tạo một thư mục để lưu trữ file cài đặt Atlas. Tạo một thư mục ở ổ đĩa thứ hai/phân vùng thứ hai với tên `AtlasFiles`. Chúng ta sẽ gọi thư mục này là "thư mục của bạn" trong các bước tiếp theo.

1. Truy cập trang [tải xuống Atlas](https://atlasos.net/) và tải xuống **AME Wizard** và **Atlas Playbook**.
2. Tải driver mạng từ website của nhà sản xuất và lưu nó trong thư mục của bạn. *(Đây là biện pháp đề phòng trong trường hợp mạng không hoạt động trong quá trình cài đặt )*
    - Chúng tôi khuyến cáo bạn nên tìm kiếm theo tên của nhà sản xuất (ví dụ: Dell) và số model của thiết bị.
        - Nếu bạn gặp vấn đề, tìm kiếm thiết bị của bạn trong [Device Manager](../assets/images/device-manager-nic.png) và tải xuống driver này.
3. Giải nén `AtlasPlaybook_v[phiên bản].zip` vào thư mục của bạn
4. Giải nén `AME Wizard Beta.exe` từ file `AME Wizard Beta.zip` mà bạn tải xuống trước đó vào thư mục của bạn

**Bây giờ bạn sẽ có một thư mục `AtlasFiles` với tất cả các file bạn cần trên ổ đĩa/ổ đĩa ngoài.**

## :material-microsoft-windows: Cài đặt lại Windows

!!! info "Cài đặt bằng USB"
    Nếu bạn muốn cài đặt lại Windows bằng USB, bạn có thể bỏ qua phần này. **Hãy đảm bảo rằng thư mục `AtlasFiles` không bị xóa.**

!!! tip "Bỏ qua yêu cầu hệ thống của Windows 11 (không bắt buộc)"
    Để bỏ qua yêu cầu hệ thống của Windows 11, sử dụng `Bypass Windows 11 Requirements.cmd` trong thư mục của bạn trước khi chạy `sources\setup.exe`.

Trước khi bắt đầu, hãy sao lưu những file quan trọng vào ổ đĩa thứ hai hoặc một dịch vụ lưu trữ đám mây.

Tuy nhiên bạn cũng không cần quá lo lắng. Bản Windows cũ của bạn (có chứa dữ liệu người dùng) sẽ được sao chép đến thư mục `Windows.old` ở trong ổ đĩa Windows của bạn. Bạn có thể sử dụng điều này như một biện pháp an toàn nếu bạn quên sao lưu các file quan trọng.

1. Bấm chuột phải vào file ISO mà bạn đã tải xuống trước đó và chọn **Open With** :material-arrow-right: **File Explorer** để mở nó.

2. Trong **This PC**, tìm ổ đĩa cho file ISO đã được mở. Mở nó và truy cập vào thư mục `sources`, và chạy `setup.exe`.
    - Trên rất nhiều laptop chạy Windows 11, BitLocker được kích hoạt sẵn và mã hóa toàn bộ ổ cứng trên máy. Thông báo ["Make sure BitLocker Drive Encryption is suspended"](../assets/images/bitlocker-error-setup.jpg) sẽ hiện ra khi bạn chạy `setup.exe`. Hãy xem [hướng dẫn mở khóa BitLocker](../faq-and-troubleshooting/common-questions/decryptying-using-bitlocker.md) để giải quyết vấn đề này.

3. Chọn **No thanks** khi được hỏi về cập nhật và bỏ tick lựa chọn **I want to help make the Windows installation better**.

4. Chọn **I don't have a product key** vì Windows sẽ được tự động kích hoạt (nếu bạn đang sử dụng Windows bản quyền)

5. Lựa chọn phiên bản Windows của bạn. Chúng tôi thực sự khuyến nghị và hỗ trợ chính thức phiên bản **Windows Pro**. Nếu bạn không có bản quyền cho Windows Pro, bạn có thể sử dụng phiên bản **Windows Home** *(không được khuyến nghị)*.

6. Chấp nhận điều khoản và chọn **Custom: Install Windows only (advanced)**

7. Chọn ổ đĩa Windows của bạn, nhấn tiếp tục, nhấn **OK** nếu có thông báo về `Windows.old` và quá trình cài đặt sẽ bắt đầu.

### :material-cog: Thiết lập ban đầu (OOBE)

!!! danger "Kết nối Internet"

    Trong khi thiết lập Windows, hãy đảm bảo rằng **cáp mạng ethernet và Wi-Fi đã được ngắt kết nối**. Đừng kết nối mạng cho đến khi được hướng dẫn.

=== "Windows 11"
    ??? info "Hướng dẫn bằng văn bản"
        1. Sau khi quá trình thiết lập bắt đầu, nhấn giữ ++shift+f10++ để mở Command Prompt.
        2. Nhập `oobe\bypassnro` và nhấn ++enter++. Thiết bị của bạn sẽ khởi động lại.
        3. Tiếp tục thiết lập như bình thường, nhưng hãy nhớ:
            - Đừng kết nối Internet
            - Từ chối những lựa chọn về quyền riêng tư

    <center>
        <video src="/assets/videos/win11-OOBE-nointernet.mp4" controls muted width="560" height="420"></video>
    </center>

=== "Windows 10"
    ??? info "Hướng dẫn bằng văn bản"
        TBD

    <center>
        <video src="/assets/videos/win10-OOBE.mp4" controls muted width="560" height="420"></video>
        <p>Nguồn video hướng dẫn: [@amitxv](https://github.com/amitxv)<p>
    </center>

## :material-screwdriver: Cập nhật driver

Driver là những thành phần phần mềm cần thiết để hệ điều hành kết nối với những thiết bị phần cứng. Mặc dù Windows có sẵn một số driver cơ bản, một số thiết bị Bluetooth, máy in hay loa sẽ cần thêm driver để hoạt động đúng cách.
Việc cài đặt driver tự động giúp đơn giản hóa quy trình và giúp driver luôn được cập nhật, tiết kiệm thời gian và công sức nhưng lại có nhược điểm là cồng kềnh hơn.

Trước khi tiếp tục, hãy cân nhắc lựa chọn nào phù hợp với bạn và nhớ nó cho những bước tiếp theo.

| :material-download: Cài đặt và cập nhật driver thủ công (khuyến khích) | :material-update: Cài đặt và cập nhật driver tự động |
| ------------------------------------ | --------------------------------------- |
| :material-check-all: Có thể sử dụng ít tài nguyên hệ thống hơn | :material-check-all: Cực kì dễ dàng nếu bạn không biết cách lấy driver |
| :material-check-all: Có thể sẽ ít những phần mềm đi kèm | :material-check: Khả năng tương thích tốt nhất, đặc biệt là với các ứng dụng OEM |
| :material-check: Kiểm soát hoàn toàn phiên bản driver của bạn | :material-check: Thuận tiện khi kết nối các thiết bị mới |
| :material-alert-circle-outline: Có thể chuyển sang cập nhật driver tự động sau | :material-check: Có những cập nhật tính năng và bảo mật mới nhất |

## :material-wrench-cog-outline: Cài đặt AtlasOS

!!! tip "Lưu ý"
    Bản Windows trước đó của bạn sẽ được chuyển vào thư mục `Windows.old` trong ổ đĩa Windows trong quá trình cài đặt lại. Bạn có thể sao chép mọi file cần thiết từ thư mục này trước khi xóa nó.

    Để xóa bản Windows trước đó của bạn, hãy mở cài đặt Windows (Settings) :material-arrow-right: System :material-arrow-right: Storage. Chọn 'Temporary files', chọn 'Previous version of Windows', và sau đó bấm vào 'Remove files'.

Như được nhắc đến trước đó trong phần [Cập nhật Driver](#driver-updates), bạn có 2 lựa chọn để cài đặt driver: Thủ công và Tự động. Hãy chọn một trong hai lựa chọn này trước khi tiến hành.

1. Sao chép thư mục `AtlasFiles` từ ổ đĩa thứ hai/phân vùng thứ hai ra ngoài màn hình chính (Desktop).
2. Nếu bạn đã chọn **Cài đặt driver thủ công**, chạy `Disable Drivers Installation in Windows Update.reg` và khởi động lại thiết bị
3. Kết nối internet cho thiết bị (cắm dây Ethernet hoặc Wi-Fi)
    - Nếu bạn không thể kết nối internet, [cài đặt driver mạng](https://www.techspot.com/community/topics/how-to-install-a-driver-when-theres-no-installation-exe-file-to-run.171861/) mà bạn đã tải về từ trước và đã lưu trong thư mục AtlasFiles.
4. Mở **Windows Settings** và cập nhật Windows cho đến khi không còn bản cập nhật nào nữa. Ngoài ra, bạn cũng nên mở **Microsoft Store** và cập nhật toàn bộ ứng dụng.
    - Bạn sẽ cần phải khởi động lại sau khi hoàn thành cập nhật. Sau khi khởi động lại, hãy kiểm tra lại các bản cập nhật nhiều lần cho đến khi không còn bản cập nhật nào hiện ra
5. Mở thư mục `AtlasFiles` và chạy `AME Wizard Beta.exe`
    - Bấm vào **Updates** ở phía trên cùng của ứng dụng và kiểm tra các bản cập nhật AME Wizard
    - SmartScreen có thể sẽ cảnh báo rằng AME Wizard là một ứng dụng không được xác thực vì nó không có chữ ký điện tử. Bạn có thể bỏ qua cảnh báo này bằng cách nhấp vào **More info** và sau đó chọn **Run anyway**.
6. Kéo và thả file `Atlas Playbook.apbx` vào AME Wizard từ thư mục `AtlasFiles`
7. Làm theo hướng dẫn trên màn hình để cài đặt AtlasOS

!!! danger "Tại sao AME Wizard lại tự động đóng và bị xóa?"
    Để ngăn Windows Defender đóng và xóa file AME Wizard, bạn nên thêm AME Wizard vào danh sách loại trừ trong cài đặt Windows Security. Điều này thường cần thiết khi một phiên bản AME Wizard mới được phát hành mà phiên bản này chưa được nhiều người sử dụng.

    Để đọc thêm về vấn đề này, hãy xem tài liệu về [Security Exceptions](https://docs.ameliorated.io/guides/security-exceptions.html) từ đội ngũ Ameliorated.

Khi hoàn tất, bạn sẽ thấy thư mục `Atlas` trên màn hình chính (Desktop). Chúng tôi hướng dẫn bạn cách cấu hình Atlas bằng thư mục này tại phần [Sau khi cài đặt](post-installation/drivers/getting-started.md) của tài liệu.

### :material-bug-outline: Xử lí sự cố
!!! tip "Cần hỗ trợ?"
    Nếu bạn gặp bất kì vấn đề nào trong quá trình cài đặt, bạn có thể tìm kiếm sự giúp đỡ trên [Diễn đàn](https://forum.atlasos.net) hoặc [máy chủ Discord](https://discord.atlasos.net). Chúng tôi có một cộng đồng lớn gồm những người luôn muốn quan tâm và giúp bạn với nhiều vấn đề khác nhau.

    Chúng tôi khuyến nghị bạn nên xem trang [Những câu hỏi thường gặp](../faq-and-troubleshooting/removed-features.md) trước khi đăng lên máy chủ Discord hoặc Diễn đàn của chúng tôi để đỡ tốn thời gian cho các câu hỏi phổ biến mà đã được trả lời từ trước.
