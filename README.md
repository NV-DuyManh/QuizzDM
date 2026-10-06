# QuizzDM

Website trắc nghiệm gồm hai môn độc lập, triển khai từ nhánh **main**:

| Môn | Trang | Bộ đề nguồn | Số câu |
| --- | --- | --- | --- |
| Kinh tế chính trị Mác – Lênin (KTCT) | [Trang mặc định](index.html) | `TN-KTCT` | 80 |
| Chủ nghĩa xã hội khoa học (CNXHKH) | [Trang CNXHKH](cnxhkh/index.html) | `TN-CNXHKH` | 105 |

Bấm **KTCT** hoặc **CNXHKH** trên thanh chọn môn để chuyển trang. Mỗi trang giữ giao diện, câu hỏi, phương án, đáp án và các chức năng từ nhánh môn học tương ứng. KTCT mở mặc định. Khi đang thi thử, chuyển sang môn khác cần xác nhận vì bài chưa nộp sẽ bị kết thúc; có thể Ctrl/Cmd-click để mở môn kia trong tab trình duyệt riêng.

## Dữ liệu riêng cho từng môn

- KTCT sử dụng `ktct_history`, `ktct_review`, `ktct_dark`, `ktct_sound`; bản sao lưu có định danh `ktct_quiz_backup`.
- CNXHKH sử dụng `cnxhkh_history`, `cnxhkh_review`, `cnxhkh_dark`, `cnxhkh_sound`; bản sao lưu có định danh `cnxhkh_quiz_backup`.
- Lịch sử điểm, câu ôn tập, cấu hình sáng/tối và âm thanh được lưu riêng. Xóa dữ liệu hay khôi phục bản sao lưu của một môn không ghi đè môn kia. Khôi phục sai môn bị từ chối.
- Chuyển môn sẽ mở một lượt luyện tập mới; lịch sử đã nộp và các câu ôn tập đã lưu vẫn được giữ.

## Chạy website

Website dùng HTML, CSS và JavaScript thuần, không cần backend hay bước build. Dùng Live Server hoặc một máy chủ tĩnh tại thư mục gốc. Các đường dẫn tương đối hỗ trợ GitHub Pages tại `/QuizzDM/`.

Nếu dùng GitHub Pages: trong **Settings → Pages**, chọn **Deploy from a branch → main → /(root)**.

Đáp án và nguồn: [KTCT](ANSWERS.md), [CNXHKH](cnxhkh/ANSWERS.md). Các tài liệu Word/PDF gốc do giảng viên cung cấp không nằm trong kho Git.
