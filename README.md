# TN-KTCT

Trang trắc nghiệm **Kinh tế chính trị Mác – Lênin**, gồm đúng 80 câu hỏi theo bộ đề ôn tập người dùng cung cấp.

Mở `index.html` trực tiếp bằng trình duyệt web hoặc dùng Live Server (VS Code). Ứng dụng chạy hoàn toàn bằng HTML, CSS và JavaScript thuần trên client, không cần cài đặt thư viện phụ thuộc hay backend.

## Chức năng chính
- **Luyện tập:** Chấm điểm ngay sau khi chọn đáp án, chỉ rõ phương án đúng/sai, hiển thị lời giải chi tiết và ghi chú lý luận của từng câu.
- **Thi thử 60 phút:** Đồng hồ đếm ngược 60:00, xáo trộn thứ tự 80 câu hỏi, ẩn toàn bộ đáp án và lời giải trong quá trình làm bài. Chấm điểm theo chỉ số câu gốc sau khi nộp bài hoặc khi hết giờ, thang điểm chuẩn trên 80.
- **Ôn tập câu khó:** Lưu các câu làm sai hoặc câu đánh dấu "Không biết" vào kho ôn tập riêng; cho phép làm lại và xóa khi đã ghi nhớ.
- **Tìm kiếm & Điều hướng:** Thanh tìm kiếm câu hỏi tức thì; lưới điều hướng 80 ô hiển thị trực quan trạng thái (đúng, sai, đã lưu ôn tập, đã chọn khi thi).
- **Lịch sử điểm số & Sao lưu:** Lưu điểm số, tỷ lệ % và thời gian làm bài; chức năng sao lưu ra file JSON và khôi phục dữ liệu an toàn.
- **Cá nhân hóa:** Hỗ trợ chế độ giao diện Sáng / Tối (Light/Dark mode) và bật / tắt âm thanh thông báo.

## Lưu trữ dữ liệu độc lập
Dữ liệu của phân hệ này sử dụng các khóa `localStorage` có tiền tố `ktct_` độc lập, tránh xung đột hay ghi đè với các phân hệ môn học khác (như `cnxhkh_`, `hcm_`, `lsdcsvn_`):
- `ktct_history`: Lịch sử các lượt nộp bài luyện tập và thi thử.
- `ktct_review`: Danh sách chỉ số các câu lưu ôn tập (chỉ chấp nhận số nguyên từ 0 đến 79).
- `ktct_dark`: Cấu hình giao diện tối.
- `ktct_sound`: Cấu hình âm thanh.
- File sao lưu định dạng: `ktct_quiz_backup_YYYY-MM-DD.json` (định danh kiểm tra `ktct_quiz_backup`, từ chối file sao lưu từ các môn khác).

## Tài liệu & Nhánh Git
- Xem bảng [đáp án ôn tập/tham khảo, nội dung lựa chọn và các điểm phân biệt](ANSWERS.md).
- Nhánh Git: `TN-KTCT`.
- Nguồn tài liệu đối chiếu: “ÔN TẬP KTCT 2026–2027” và “Tập bài giảng Kinh tế chính trị Mác – Lênin”, POS 151, ThS. Trần Thị Dung, Đại học Duy Tân, 2026, do người dùng cung cấp. Bản tài liệu gốc lưu hành nội bộ, không nằm trong kho Git.
