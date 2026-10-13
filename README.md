# QuizzDM - CS466: Python, Lập trình mạng & Network Automation

Trang trắc nghiệm **CS466 — Python, Lập trình mạng và Network Automation**, gồm đúng **39 câu hỏi trắc nghiệm chuẩn hóa** từ bộ đề ôn tập.

Mở `index.html` trực tiếp bằng trình duyệt web (Chrome, Edge, Firefox, Safari) hoặc dùng Live Server (VS Code). Ứng dụng chạy hoàn toàn bằng HTML, CSS và JavaScript thuần trên client, không cần cài đặt thư viện phụ thuộc hay backend.

## Chức năng chính
- **Bộ đề chuẩn 39 câu:** Bao quát các chủ đề cốt lõi:
  - **Python cơ bản & nâng cao:** List comprehension, enumerate, regex (`re.search`, `re.findall`), unpacking, dictionary, list, string formatting.
  - **Lập trình mạng Socket:** TCP vs UDP, socket lifecycle (`socket`, `bind`, `listen`, `accept`, `connect`, `sendall`, `recv`, `recvfrom`), IPv4 (`AF_INET`), TCP (`SOCK_STREAM`), UDP (`SOCK_DGRAM`).
  - **REST API & Định dạng dữ liệu:** HTTP methods (GET, POST, PUT, DELETE), status codes (200, 201, 404, 500), cấu trúc JSON, cú pháp YAML và nạp an toàn `yaml.safe_load`.
  - **Tự động hóa mạng (Network Automation):** Netmiko (`ConnectHandler`, `send_command`, `send_config_set`), Paramiko `SSHClient`, Ansible Playbook (tasks, modules `ios_command`, `cisco.ios.ios_config`).
- **Hiển thị code trực quan:** Đoạn mã nguồn Python, Ansible, JSON được định dạng trong khung `<pre><code>` với font chữ lập trình monospace chuẩn, giữ nguyên thụt lề, ký tự escape regex `\d` và xuống dòng.
- **Hỗ trợ câu hỏi có đáp án kép tương đương:**
  - `cs466-035`: Chấp nhận cả **A** và **C** (cùng có giá trị `"EDGE-R1"`).
  - `cs466-038`: Chấp nhận cả **C** và **D** (cùng có giá trị `"SW-CORE-01"`).
  - Chọn bất kỳ đáp án đúng nào đều được tính 1 điểm; khi hiển thị đáp án, hệ thống đánh dấu đúng cho cả hai phương án tương đương.
- **Chế độ Luyện tập:** Chấm điểm ngay sau khi chọn đáp án, chỉ rõ phương án đúng/sai, hiển thị lời giải thích chi tiết, mẹo ghi nhớ và lưu ý nguồn.
- **Chế độ Thi thử 60 phút:** Đồng hồ đếm ngược 60:00, xáo trộn thứ tự 39 câu hỏi, ẩn toàn bộ đáp án và lời giải trong quá trình làm bài. Chấm điểm theo chỉ số câu gốc sau khi nộp bài hoặc khi hết giờ, thang điểm chuẩn 39 câu.
- **Kho Ôn tập câu khó:** Lưu các câu làm sai hoặc đánh dấu "Không biết" vào kho ôn tập riêng; cho phép làm lại và xóa khi đã nắm vững kiến thức.
- **Tìm kiếm & Điều hướng:** Thanh tìm kiếm câu hỏi tức thì theo từ khóa, hàm, module hoặc đoạn mã; thanh điều hướng 39 ô hiển thị trực quan trạng thái (đúng, sai, đã lưu ôn tập, đã chọn khi thi).
- **Lịch sử điểm số & Sao lưu:** Lưu lịch sử các lượt làm bài và thi thử; chức năng sao lưu ra file JSON (`cs466_quiz_backup_YYYY-MM-DD.json`) và khôi phục dữ liệu an toàn.
- **Giao diện & Tiện ích:** Hỗ trợ chế độ Sáng / Tối (Dark mode), bật / tắt âm thanh thông báo qua Web Audio API, thanh công cụ mobile thu gọn.

## Lưu trữ dữ liệu độc lập
Dữ liệu của học phần CS466 sử dụng các khóa `localStorage` có tiền tố `cs466_` độc lập, tránh xung đột hay ghi đè với các phân hệ môn học khác:
- `cs466_history`: Lịch sử các lượt nộp bài luyện tập và thi thử.
- `cs466_review`: Danh sách chỉ số các câu lưu ôn tập (chỉ chấp nhận số nguyên từ 0 đến 38).
- `cs466_dark`: Cấu hình giao diện tối.
- `cs466_sound`: Cấu hình âm thanh.
- File sao lưu định dạng: `cs466_quiz_backup_YYYY-MM-DD.json` (định danh kiểm tra `cs466_quiz_backup`).

## Tài liệu & Nhánh Git
- Xem bảng [đáp án ôn tập, nội dung lựa chọn và phân tích chi tiết](ANSWERS.md).
- Nhánh Git: `perl-python`.
