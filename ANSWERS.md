# Đáp án CS466 — Python, Lập trình mạng & Network Automation

Bộ **39 câu trắc nghiệm** học phần **CS466 (Python, Socket TCP/UDP, REST API, Netmiko, Paramiko, Ansible, YAML, Regex)**. Tài liệu tổng hợp đầy đủ câu hỏi nguyên văn, code mẫu chuẩn, đáp án được chấp nhận, phân tích chi tiết, mẹo làm bài và hướng dẫn ôn tập.

## Bảng đáp án tổng hợp (39 câu)

| STT | ID | Đáp án | Nội dung lựa chọn được tính điểm | Lưu ý đặc biệt |
| :---: | :---: | :---: | :--- | :--- |
| 1 | `cs466-001` | **A** | ["10.0.0.1"] | Đề gốc chỉ có 3 lựa chọn (A, B, C). Đề gốc chỉ có A, B, C. |
| 2 | `cs466-002` | **A** | POST /students thường được sử dụng để tạo sinh viên mới. | - |
| 3 | `cs466-003` | **B** | yaml.safe_load(f) | - |
| 4 | `cs466-004` | **A** | sendall()/recv() | - |
| 5 | `cs466-005` | **B** | RejectPolicy() | - |
| 6 | `cs466-006` | **B** | 6 | - |
| 7 | `cs466-007` | **A** | Tự động hóa tương tác CLI với nhiều platform thiết bị mạng qua SSH | - |
| 8 | `cs466-008` | **A** | [{"name": "An"}, {"name": "Bình"}] | - |
| 9 | `cs466-009` | **B** | 10:R1 11:R2 12:SW1 | - |
| 10 | `cs466-010` | **D** | [1, 2, 3, 4] | - |
| 11 | `cs466-011` | **D** | 5 2 | - |
| 12 | `cs466-012` | **B** | bind() | - |
| 13 | `cs466-013` | **C** | True | - |
| 14 | `cs466-014` | **A** | TCP có cơ chế kết nối và hỗ trợ truyền dữ liệu tin cậy hơn UDP. | - |
| 15 | `cs466-015` | **B** | [20, 30, 40] | - |
| 16 | `cs466-016` | **C** | isdigit() | - |
| 17 | `cs466-017` | **C** | 40 | - |
| 18 | `cs466-018` | **B** | True | - |
| 19 | `cs466-019` | **C** | 1:R1 2:R2 3:R3 | - |
| 20 | `cs466-020` | **A** | True | - |
| 21 | `cs466-021` | **D** | Sử dụng secret manager hoặc cơ chế cung cấp secret tại runtime, áp dụng quyền tối thiểu và không ghi secret vào log | - |
| 22 | `cs466-022` | **A** | Chuyển đối tượng Python thành chuỗi JSON | - |
| 23 | `cs466-023` | **A** | lstrip() | - |
| 24 | `cs466-024` | **D** | Chờ cho đến khi có Client kết nối | - |
| 25 | `cs466-025` | **B** | Mask/redact giá trị nhạy cảm trước khi ghi log | - |
| 26 | `cs466-026` | **B** | R2 | - |
| 27 | `cs466-027` | **C** | 10 | - |
| 28 | `cs466-028` | **D** | Nhận tối đa 1024 byte dữ liệu | - |
| 29 | `cs466-029` | **A** | Trao đổi dữ liệu với Client đã kết nối | - |
| 30 | `cs466-030` | **B** | [2, 6, 10] | - |
| 31 | `cs466-031` | **A** | up | Đề gốc chỉ có 3 lựa chọn (A, B, C). Đề gốc chỉ có A, B, C. |
| 32 | `cs466-032` | **A** | Mô phỏng/ước lượng thay đổi đối với module hỗ trợ mà chưa áp dụng thay đổi | - |
| 33 | `cs466-033` | **A** | r = requests.get(url, timeout=5); r.raise_for_status() | - |
| 34 | `cs466-034` | **A** | Giới hạn phạm vi host được chạy playbook | - |
| 35 | `cs466-035` | **A hoặc C** | EDGE-R1 / EDGE-R1 | Chấp nhận cả A hoặc C (nội dung tương đương). Chỉ có A, B, C; không có D. Hai lựa chọn A/C giống nhau. Trong ứng dụng luyện tập, chọn A hoặc C đều phải được tính đúng. |
| 36 | `cs466-036` | **C** | 201 Created | - |
| 37 | `cs466-037` | **D** | set | - |
| 38 | `cs466-038` | **C hoặc D** | SW-CORE-01 / SW-CORE-01 | Chấp nhận cả C hoặc D (nội dung tương đương). C và D giống nhau. Trong ứng dụng luyện tập, chọn C hoặc D đều phải được tính đúng. |
| 39 | `cs466-039` | **C** | Địa chỉ IP và cổng của Client gửi dữ liệu | - |

---

## Chi tiết 39 câu hỏi & Lời giải phân tích

### Câu 1 (`cs466-001`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
devices = [{"ip":"10.0.0.1","up":True},{"ip":"10.0.0.2","up":False}]
print([d["ip"] for d in devices if d["up"]])
```

**Các lựa chọn:**
- **A.** ["10.0.0.1"]
- **B.** ["10.0.0.2"]
- **C.** [True]

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** Điều kiện if d["up"] chỉ giữ thiết bị có up=True. Thiết bị đầu được giữ, rồi d["ip"] lấy IP "10.0.0.1". Thiết bị thứ hai có up=False nên bị loại. Kết quả là list IP, không phải list Boolean.
- **Mẹo làm bài:** Đọc list comprehension theo thứ tự: duyệt từng phần tử → kiểm tra if → lấy biểu thức ở đầu. Đừng thấy True trong điều kiện rồi chọn [True].
- **Lưu ý nguồn:** Đề gốc chỉ có A, B, C.

### Câu 2 (`cs466-002`)
**Câu hỏi:** Một REST API hỗ trợ:
GET /students
GET /students/5
POST /students
DELETE /students/5
Phát biểu nào sau đây đúng?

**Các lựa chọn:**
- **A.** POST /students thường được sử dụng để tạo sinh viên mới.
- **B.** GET /students/5 dùng để xóa sinh viên có mã 5.
- **C.** DELETE /students/5 dùng để lấy thông tin sinh viên có mã 5.
- **D.** GET /students dùng để thêm sinh viên mới.

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** Trong thiết kế REST thông dụng, POST /students tạo sinh viên mới. GET /students lấy danh sách, GET /students/5 lấy sinh viên có mã 5, còn DELETE /students/5 xóa sinh viên đó. B, C, D nhầm chức năng của phương thức.
- **Mẹo làm bài:** GET lấy — POST tạo — DELETE xóa. Đọc phương thức trước, sau đó mới đọc URL để xác định tài nguyên được tác động.

### Câu 3 (`cs466-003`)
**Câu hỏi:** Khi đọc một file cấu hình YAML thông thường bằng PyYAML, cách nào an toàn hơn?

**Các lựa chọn:**
- **A.** pickle.loads(f.read())
- **B.** yaml.safe_load(f)
- **C.** yaml.load(f) không kiểm soát Loader
- **D.** eval(f.read())

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** safe_load() đọc các kiểu YAML thông thường và hạn chế khả năng dựng đối tượng Python tùy ý. eval() thực thi biểu thức Python; pickle không phải bộ đọc YAML và giải tuần tự dữ liệu không tin cậy có thể nguy hiểm. yaml.load() không kiểm soát Loader không đáp ứng yêu cầu an toàn hơn.
- **Mẹo làm bài:** Thấy YAML + đọc cấu hình + an toàn hơn → safe_load(). Phân biệt đọc dữ liệu với thực thi mã.

### Câu 4 (`cs466-004`)
**Câu hỏi:** Trên một TCP socket đã kết nối, cặp phương thức nào phù hợp để gửi toàn bộ buffer và nhận dữ liệu?

**Các lựa chọn:**
- **A.** sendall()/recv()
- **B.** bind()/listen()
- **C.** connect()/accept()
- **D.** write()/read()

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** sendall() tiếp tục gửi đến khi hết buffer hoặc gặp lỗi; recv() nhận dữ liệu trên socket. bind/listen và connect/accept phục vụ thiết lập địa chỉ hoặc kết nối. write/read không phải cặp phương thức trực tiếp được hỏi của đối tượng socket này.
- **Mẹo làm bài:** sendall = gửi hết buffer hoặc báo lỗi; recv = nhận. Không suy ra rằng một lần recv() chắc chắn nhận hết dữ liệu đã gửi.

### Câu 5 (`cs466-005`)
**Câu hỏi:** Với Paramiko, chính sách nào phù hợp khi muốn từ chối host key chưa được tin cậy thay vì tự động chấp nhận?

**Các lựa chọn:**
- **A.** AutoAddPolicy()
- **B.** RejectPolicy()
- **C.** WarningPolicy() luôn chấp nhận
- **D.** Không cần host-key policy

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** RejectPolicy() từ chối host key chưa có trong danh sách tin cậy. AutoAddPolicy() tự thêm khóa mới; WarningPolicy() cảnh báo rồi chấp nhận khóa chưa biết, nên không đáp ứng yêu cầu từ chối.
- **Mẹo làm bài:** Reject = từ chối; AutoAdd = tự thêm. Host key dùng để xác minh máy chủ SSH, không phải mật khẩu đăng nhập của người dùng.

### Câu 6 (`cs466-006`)
**Câu hỏi:** Cho đoạn code sau. Kết quả là:
```python
d = {"a": 1, "b": 2}
d["c"] = d.get("a", 0) + d.get("x", 5)
print(d["c"])
```

**Các lựa chọn:**
- **A.** 5
- **B.** 6
- **C.** 1
- **D.** Lỗi

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** Khóa "a" có giá trị 1, nên get("a", 0) trả 1. Khóa "x" không tồn tại, nên get("x", 5) trả mặc định 5. Tổng 1 + 5 = 6 được gán vào "c".
- **Mẹo làm bài:** Với get(k, mặc định): có khóa lấy giá trị, thiếu khóa lấy mặc định. Tính từng vế riêng rồi cộng.

### Câu 7 (`cs466-007`)
**Câu hỏi:** Netmiko phù hợp nhất cho trường hợp nào?

**Các lựa chọn:**
- **A.** Tự động hóa tương tác CLI với nhiều platform thiết bị mạng qua SSH
- **B.** Xây dựng HTTP web server
- **C.** Huấn luyện mô hình machine learning
- **D.** Truy vấn cơ sở dữ liệu SQL

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** Netmiko hỗ trợ kết nối và gửi lệnh CLI qua SSH tới nhiều nền tảng thiết bị mạng, đặc biệt router/switch. HTTP server, huấn luyện mô hình và truy vấn SQL không phải mục đích chính của thư viện.
- **Mẹo làm bài:** Nhận diện cụm router/switch + CLI + SSH theo platform → Netmiko. Không chọn theo từ “Python” chung chung.

### Câu 8 (`cs466-008`)
**Câu hỏi:** Cho đoạn code sau. Để đoạn code trên hoạt động đúng, dữ liệu Server trả về phù hợp nhất là:
```python
response = requests.get("http://127.0.0.1:5000/students")
students = response.json()
print(students[0]["name"])
```

**Các lựa chọn:**
- **A.** [{"name": "An"}, {"name": "Bình"}]
- **B.** {"name": "An"}
- **C.** An, Bình
- **D.** {"students": "An"}

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** students[0] lấy phần tử đầu của list; phần tử này phải có khóa "name". A đáp ứng cấu trúc và in "An". B và D là đối tượng JSON không có cấu trúc list được yêu cầu; C không phải JSON hợp lệ như được trình bày.
- **Mẹo làm bài:** [0] chọn phần tử đầu; ["name"] chọn trường. Đi từ ngoài vào trong để suy ra cấu trúc: list bên ngoài, dictionary bên trong.

### Câu 9 (`cs466-009`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả được in ra là:
```python
devices = ["R1", "R2", "SW1"]
for i, d in enumerate(devices, start=10):
    print(f"{i}:{d}", end=" ")
```

**Các lựa chọn:**
- **A.** 0:R1 1:R2 2:SW1
- **B.** 10:R1 11:R2 12:SW1
- **C.** R1:10 R2:11 SW1:12
- **D.** Error

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** enumerate(..., start=10) đánh số 10, 11, 12. F-string {i}:{d} in số trước, tên thiết bị sau. end=" " giữ các kết quả trên cùng dòng, ngăn cách bằng dấu cách.
- **Mẹo làm bài:** Kiểm tra hai điểm: bắt đầu từ bao nhiêu và số hay tên được in trước. A sai điểm bắt đầu; C đảo thứ tự.

### Câu 10 (`cs466-010`)
**Câu hỏi:** Cho đoạn code sau. Kết quả là:
```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```

**Các lựa chọn:**
- **A.** [4]
- **B.** [1, 2, 3]
- **C.** Lỗi
- **D.** [1, 2, 3, 4]

👉 **Đáp án đúng:** **D**
- **Vì sao đúng:** y = x làm hai biến cùng tham chiếu một list, không tạo bản sao. append(4) thêm phần tử vào list chung, nên đọc qua x cũng thấy phần tử mới.
- **Mẹo làm bài:** y = x dùng chung; y = x.copy() tạo list khác. Với câu hỏi list, xác định biến đang dùng chung hay dùng bản sao trước khi tính kết quả.

### Câu 11 (`cs466-011`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
base = {"timeout": 3, "retries": 2}
override = {"timeout": 5}
cfg = {**base, **override}
print(cfg["timeout"], cfg["retries"])
```

**Các lựa chọn:**
- **A.** 5 3
- **B.** 3 2
- **C.** Error
- **D.** 5 2

👉 **Đáp án đúng:** **D**
- **Vì sao đúng:** Dictionary phía sau ghi đè giá trị của khóa trùng. "timeout" trở thành 5, còn "retries" không bị ghi đè nên vẫn là 2.
- **Mẹo làm bài:** Khóa trùng: bên sau thắng; khóa không trùng: giữ lại. Không cộng các giá trị khi gặp cú pháp gộp dictionary.

### Câu 12 (`cs466-012`)
**Câu hỏi:** Trong TCP server, phương thức nào dùng để gắn socket với địa chỉ IP và cổng cục bộ?

**Các lựa chọn:**
- **A.** connect()
- **B.** bind()
- **C.** accept()
- **D.** recv()

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** bind() gắn socket vào IP và cổng cục bộ. connect() kết nối tới địa chỉ đích; accept() nhận kết nối; recv() nhận dữ liệu.
- **Mẹo làm bài:** bind gắn — connect nối — accept nhận kết nối — recv nhận dữ liệu. Chú ý câu hỏi đang nói về thiết lập hay trao đổi dữ liệu.

### Câu 13 (`cs466-013`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
import re
result = bool(re.fullmatch(r"Gi\d+/\d+", "Gi0/1"))
print(result)
```

**Các lựa chọn:**
- **A.** Error
- **B.** False
- **C.** True
- **D.** None

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** Mẫu yêu cầu Gi, một hoặc nhiều chữ số, dấu /, rồi một hoặc nhiều chữ số. "Gi0/1" khớp toàn bộ. fullmatch() trả đối tượng Match và bool() chuyển nó thành True.
- **Mẹo làm bài:** \d = chữ số; + = ít nhất một; fullmatch = khớp cả chuỗi. Đừng nhầm với search() chỉ cần khớp một đoạn.

### Câu 14 (`cs466-014`)
**Câu hỏi:** Điểm khác biệt đúng giữa TCP và UDP là:

**Các lựa chọn:**
- **A.** TCP có cơ chế kết nối và hỗ trợ truyền dữ liệu tin cậy hơn UDP.
- **B.** UDP đảm bảo dữ liệu luôn đến đúng thứ tự.
- **C.** TCP không cần thiết lập kết nối, UDP cần kết nối.
- **D.** TCP chỉ sử dụng được trong mạng LAN.

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** TCP hướng kết nối, có cơ chế xác nhận, truyền lại và cung cấp luồng bytes đúng thứ tự. UDP không tự bảo đảm giao nhận hoặc thứ tự. C đảo ngược đặc điểm; D sai vì TCP có thể dùng qua Internet.
- **Mẹo làm bài:** TCP: kết nối, truyền lại, đúng thứ tự. UDP: datagram, không tự bảo đảm các điều đó. Tránh các lựa chọn có từ tuyệt đối như “luôn” khi chúng trái đặc điểm giao thức.

### Câu 15 (`cs466-015`)
**Câu hỏi:** Trong Python, kết quả của đoạn code sau là gì?
```python
data = [10, 20, 30, 40, 50]
print(data[-4:-1])
```

**Các lựa chọn:**
- **A.** [10, 20, 30]
- **B.** [20, 30, 40]
- **C.** [20, 30, 40, 50]
- **D.** [30, 40, 50]

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** -4 trỏ tới 20; chỉ số kết thúc -1 trỏ tới 50 nhưng không được lấy. Lát cắt gồm 20, 30, 40.
- **Mẹo làm bài:** Chỉ số âm đếm từ cuối; lát cắt lấy đầu, bỏ cuối. Đánh dấu hai mốc trước rồi mới chọn phần tử.

### Câu 16 (`cs466-016`)
**Câu hỏi:** Một script nhận số cổng dưới dạng chuỗi "443". Phương thức nào thích hợp để kiểm tra chuỗi không rỗng và tất cả ký tự đều là chữ số?

**Các lựa chọn:**
- **A.** isspace()
- **B.** isalpha()
- **C.** isdigit()
- **D.** isprintable()

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** isdigit() trả True khi chuỗi có ít nhất một ký tự và mọi ký tự đều là chữ số. isspace() kiểm tra ký tự trắng; isalpha() kiểm tra chữ; isprintable() kiểm tra khả năng hiển thị.
- **Mẹo làm bài:** digit = chữ số. "".isdigit() là False. Để xác thực cổng thực tế còn cần kiểm tra khoảng giá trị; isdigit() còn chấp nhận một số chữ số Unicode.

### Câu 17 (`cs466-017`)
**Câu hỏi:** Cho đoạn code sau. Kết quả là:
```python
numbers = (10, 20, 30, 40)
print(numbers[-1])
```

**Các lựa chọn:**
- **A.** 10
- **B.** 30
- **C.** 40
- **D.** 20

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** Chỉ số -1 truy cập phần tử cuối tuple, ở đây là 40. Tuple hỗ trợ truy cập bằng chỉ số âm giống list.
- **Mẹo làm bài:** [0] đầu tiên — [-1] cuối cùng — [-2] áp cuối.

### Câu 18 (`cs466-018`)
**Câu hỏi:** Cho đoạn code sau. Kết quả là:
```python
s = "python-api"
print(s.startswith("py") and s.endswith("api"))
```

**Các lựa chọn:**
- **A.** False
- **B.** True
- **C.** python-api
- **D.** Lỗi

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** Chuỗi bắt đầu bằng "py" và kết thúc bằng "api", nên hai điều kiện đều True. Kết quả được in là Boolean, không phải chuỗi gốc.
- **Mẹo làm bài:** startswith kiểm tra đầu; endswith kiểm tra cuối; and cần cả hai đúng. Tính từng điều kiện riêng trước khi nối bằng and.

### Câu 19 (`cs466-019`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
devices = ["R1", "R2", "R3"]
for i, d in enumerate(devices, start=1):
    print(f"{i}:{d}", end=" ")
```

**Các lựa chọn:**
- **A.** R1:1 R2:2 R3:3
- **B.** Error
- **C.** 1:R1 2:R2 3:R3
- **D.** 0:R1 1:R2 2:R3

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** Số thứ tự bắt đầu từ 1, lần lượt ghép với R1, R2, R3. F-string đặt số trước tên, còn end=" " giữ kết quả trên cùng dòng.
- **Mẹo làm bài:** Nhìn start=1 và {i}:{d}. A đảo thứ tự; D bỏ qua tham số start.

### Câu 20 (`cs466-020`)
**Câu hỏi:** Đoạn mã post-check sau in ra giá trị nào?
```python
expected = {"R1": "up"}
actual = {"R1": "up"}
print(actual["R1"] == expected["R1"])
```

**Các lựa chọn:**
- **A.** True
- **B.** False
- **C.** None
- **D.** Error

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** Giá trị ở khóa "R1" của hai dictionary đều là "up". Hai chuỗi bằng nhau nên == trả True.
- **Mẹo làm bài:** = gán; == so sánh. Post-check so trạng thái thực tế với mong đợi; kết quả True ở đây chỉ chứng minh hai giá trị bằng nhau.

### Câu 21 (`cs466-021`)
**Câu hỏi:** Một script network automation chạy trên CI/CD cần token để gọi REST API. Cách quản lý token nào phù hợp nhất?

**Các lựa chọn:**
- **A.** Đặt token làm một phần của tên file cấu hình
- **B.** Hardcode token trực tiếp trong source code
- **C.** Ghi token vào file log để dễ kiểm tra
- **D.** Sử dụng secret manager hoặc cơ chế cung cấp secret tại runtime, áp dụng quyền tối thiểu và không ghi secret vào log

👉 **Đáp án đúng:** **D**
- **Vì sao đúng:** Cấp token khi chạy giúp tránh lưu bí mật trong source code. Quyền tối thiểu giới hạn tác động của token, còn không ghi secret vào log giảm nguy cơ rò rỉ. Tên file, mã nguồn và log đều không phải nơi phù hợp để công khai token.
- **Mẹo làm bài:** Nhớ ba ý cấp lúc chạy — quyền tối thiểu — không lộ log. Không nhầm “dễ kiểm tra” với quản lý secret đúng cách.

### Câu 22 (`cs466-022`)
**Câu hỏi:** Trong Python, json.dumps(payload) chủ yếu dùng để làm gì?

**Các lựa chọn:**
- **A.** Chuyển đối tượng Python thành chuỗi JSON
- **B.** Đọc chuỗi JSON thành dictionary
- **C.** Mở kết nối TCP
- **D.** Đọc file YAML an toàn

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** json.dumps() chuyển đối tượng Python được hỗ trợ thành chuỗi JSON. json.loads() làm chiều ngược lại. Đây là chuyển đổi dữ liệu, không mở kết nối hay đọc YAML.
- **Mẹo làm bài:** dumps ghi JSON — loads đọc JSON. Chữ s gắn với xử lý chuỗi; dumps() chưa tạo bytes để gửi qua socket.

### Câu 23 (`cs466-023`)
**Câu hỏi:** Cho output CLI là " Gi0/1 up ". Nếu chỉ muốn loại bỏ whitespace ở đầu chuỗi và giữ nguyên whitespace ở cuối, phương thức phù hợp là:

**Các lựa chọn:**
- **A.** lstrip()
- **B.** replace()
- **C.** strip()
- **D.** rstrip()

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** lstrip() chỉ loại whitespace đầu chuỗi. rstrip() xử lý cuối, còn strip() xử lý cả hai đầu nên không đáp ứng yêu cầu giữ whitespace ở cuối. replace() cần chỉ rõ nội dung thay thế và không phải lựa chọn trực tiếp phù hợp nhất.
- **Mẹo làm bài:** L=Left, R=Right. Gạch chân từ “chỉ” và “giữ nguyên” để không chọn nhầm strip().

### Câu 24 (`cs466-024`)
**Câu hỏi:** Trong TCP Server, phương thức accept() thường:

**Các lựa chọn:**
- **A.** Gửi dữ liệu cho Client
- **B.** Đóng Socket
- **C.** Chuyển chuỗi sang byte
- **D.** Chờ cho đến khi có Client kết nối

👉 **Đáp án đúng:** **D**
- **Vì sao đúng:** Trên listening socket ở chế độ blocking thông thường, accept() chờ kết nối đến rồi trả socket kết nối mới và địa chỉ Client. Gửi dùng sendall(), đóng dùng close(), đổi chuỗi thành bytes dùng encode().
- **Mẹo làm bài:** listen lắng nghe — accept nhận kết nối. Với non-blocking hoặc timeout, hành vi chờ có thể khác; đề dùng từ “thường”.

### Câu 25 (`cs466-025`)
**Câu hỏi:** Trong logging, cách nào phù hợp hơn để tránh lộ token bí mật?

**Các lựa chọn:**
- **A.** Ghi toàn bộ token ở mức DEBUG
- **B.** Mask/redact giá trị nhạy cảm trước khi ghi log
- **C.** Nối token vào exception message
- **D.** In toàn bộ biến môi trường

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** Mask/redact là che hoặc loại bỏ thông tin nhạy cảm trước khi ghi log. DEBUG vẫn là log và có thể bị thu thập; exception message và biến môi trường cũng có thể chứa token.
- **Mẹo làm bài:** Log sự kiện cần biết, không log bí mật. Không chọn DEBUG chỉ vì nghĩ mức này “ẩn” hoặc chỉ dùng lúc phát triển.

### Câu 26 (`cs466-026`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
devices = [
    {"name": "R1", "latency": 15},
    {"name": "R2", "latency": 8},
    {"name": "R3", "latency": 20}
]
best = min(devices, key=lambda d: d["latency"])
print(best["name"])
```

**Các lựa chọn:**
- **A.** R3
- **B.** R2
- **C.** Error
- **D.** R1

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** key yêu cầu so sánh các thiết bị theo latency. Giá trị nhỏ nhất trong 15, 8, 20 là 8, thuộc R2. min() trả về dictionary của R2 rồi ["name"] lấy tên.
- **Mẹo làm bài:** Xem key trước để biết tiêu chí; min nhỏ nhất, max lớn nhất. Đừng so tên thiết bị khi key đang lấy độ trễ.

### Câu 27 (`cs466-027`)
**Câu hỏi:** Cho đoạn code sau. Kết quả là:
```python
def tinh(a, b=2):
    return a * b
print(tinh(5))
```

**Các lựa chọn:**
- **A.** 5
- **B.** 7
- **C.** 10
- **D.** Lỗi do thiếu tham số b

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** a=5; không truyền b nên dùng giá trị mặc định 2. Hàm tính 5 * 2 và trả 10, sau đó print() hiển thị kết quả.
- **Mẹo làm bài:** Không truyền tham số thì dùng mặc định nếu có. Thay giá trị vào công thức trước khi tính; không cộng khi hàm dùng dấu *.

### Câu 28 (`cs466-028`)
**Câu hỏi:** Cho đoạn code phía Client sau. Lệnh recv(1024) có ý nghĩa là:
```python
client.sendall("Hello".encode("utf-8"))
data = client.recv(1024)
```

**Các lựa chọn:**
- **A.** Gửi 1024 byte dữ liệu
- **B.** Chờ 1024 Client kết nối
- **C.** Nhận chính xác 1024 ký tự
- **D.** Nhận tối đa 1024 byte dữ liệu

👉 **Đáp án đúng:** **D**
- **Vì sao đúng:** recv(1024) nhận tối đa 1024 bytes trong lần gọi đó. Dữ liệu thực nhận có thể ít hơn; giá trị trả về là bytes, không phải số ký tự Unicode.
- **Mẹo làm bài:** recv(N) = nhận tối đa N bytes. Hai bẫy cần tránh là “chính xác” và “ký tự”.

### Câu 29 (`cs466-029`)
**Câu hỏi:** Cho TCP Server sau. Biến conn được sử dụng để:
```python
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("127.0.0.1", 9001))
server.listen(5)
conn, addr = server.accept()
```

**Các lựa chọn:**
- **A.** Trao đổi dữ liệu với Client đã kết nối
- **B.** Chứa địa chỉ IP của Server
- **C.** Lắng nghe các kết nối mới
- **D.** Chứa số cổng của Client

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** accept() trả connected socket conn và địa chỉ Client addr. conn dùng để gửi/nhận với Client đó; server là listening socket. Vì vậy conn không phải địa chỉ hay số cổng.
- **Mẹo làm bài:** server đón kết nối — conn trao đổi dữ liệu — addr chứa địa chỉ. Nhớ hai socket có hai vai trò khác nhau.

### Câu 30 (`cs466-030`)
**Câu hỏi:** Cho đoạn code sau. Kết quả là:
```python
numbers = [1, 2, 3, 4, 5]
result = [x * 2 for x in numbers if x % 2 == 1]
print(result)
```

**Các lựa chọn:**
- **A.** [1, 3, 5]
- **B.** [2, 6, 10]
- **C.** [2, 4, 6, 8, 10]
- **D.** [4, 8]

👉 **Đáp án đúng:** **B**
- **Vì sao đúng:** Điều kiện % 2 == 1 giữ số lẻ 1, 3, 5; nhân từng số với 2 được 2, 6, 10. A chỉ lọc mà chưa nhân; C bỏ qua điều kiện; D xử lý số chẵn.
- **Mẹo làm bài:** Lọc trước → nhân sau. % 2 == 1 chọn lẻ; % 2 == 0 chọn chẵn.

### Câu 31 (`cs466-031`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
import json
raw = '{"device":"R1","status":"up"}'
data = json.loads(raw)
print(data.get("status"))
```

**Các lựa chọn:**
- **A.** up
- **B.** R1
- **C.** status

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** json.loads() chuyển chuỗi JSON thành dictionary. get("status") lấy giá trị "up", không lấy tên khóa "status" hoặc giá trị của khóa "device".
- **Mẹo làm bài:** loads đọc JSON — get lấy theo khóa. Phân biệt tên khóa với giá trị của khóa.
- **Lưu ý nguồn:** Đề gốc chỉ có A, B, C.

### Câu 32 (`cs466-032`)
**Câu hỏi:** Ansible check mode chủ yếu được dùng để làm gì?

**Các lựa chọn:**
- **A.** Mô phỏng/ước lượng thay đổi đối với module hỗ trợ mà chưa áp dụng thay đổi
- **B.** Tự động rollback mọi lỗi
- **C.** Bỏ qua inventory
- **D.** Tắt SSH trên host đích

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** Check mode giúp xem thay đổi dự kiến của module có hỗ trợ. Nó không tự hoàn tác, không bỏ qua inventory và không tắt SSH. Không phải mọi module đều mô phỏng đầy đủ; task không hỗ trợ có thể bị bỏ qua.
- **Mẹo làm bài:** Check = xem trước; rollback = khôi phục sau thay đổi. Chú ý cụm “module hỗ trợ”; không suy ra mọi task đều được mô phỏng.

### Câu 33 (`cs466-033`)
**Câu hỏi:** Đoạn mã nào phù hợp hơn cho một script gọi REST API cần tránh chờ vô hạn và cần phát hiện HTTP 4xx/5xx?

**Các lựa chọn:**
- **A.** r = requests.get(url, timeout=5); r.raise_for_status()
- **B.** requests.get(url, verify=False)
- **C.** requests.get(url)
- **D.** eval(requests.get(url).text)

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** timeout=5 giới hạn chờ kết nối/đọc; raise_for_status() báo HTTPError cho phản hồi 4xx/5xx. verify=False chỉ tắt xác minh TLS; gọi GET không timeout không đáp ứng yêu cầu giới hạn chờ. eval() thực thi nội dung và không phải cách xử lý phản hồi an toàn.
- **Mẹo làm bài:** Có hai yêu cầu thì tìm đủ hai thao tác: timeout cho thời gian chờ + raise_for_status cho HTTP lỗi. Timeout không phải giới hạn tổng thời gian tuyệt đối của toàn request.

### Câu 34 (`cs466-034`)
**Câu hỏi:** Trong Ansible, tùy chọn --limit hữu ích nhất để làm gì?

**Các lựa chọn:**
- **A.** Giới hạn phạm vi host được chạy playbook
- **B.** Tăng số CPU của host
- **C.** Tự động tạo secret
- **D.** Thay thế inventory

👉 **Đáp án đúng:** **A**
- **Vì sao đúng:** --limit thu hẹp tập host trong phạm vi host mà play đã chọn, dựa trên tên, nhóm hoặc mẫu. Nó không thay thế inventory và không thay tài nguyên máy hay tạo secret.
- **Mẹo làm bài:** Inventory khai báo host — play chọn host — limit thu hẹp phạm vi. “Limit” nghĩa là giới hạn.

### Câu 35 (`cs466-035`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả được in ra là:
```python
label = " edge-r1\n"
print(label.strip().upper())
```

**Các lựa chọn:**
- **A.** EDGE-R1
- **B.** edge-r1
- **C.** EDGE-R1

👉 **Đáp án đúng:** **A hoặc C**
- **Vì sao đúng:** strip() bỏ whitespace hai đầu, gồm dấu cách đầu và ký tự xuống dòng cuối. upper() đổi chữ thành hoa, tạo "EDGE-R1". B chưa chuyển chữ hoa. A và C cùng hiển thị kết quả đúng.
- **Mẹo làm bài:** strip làm sạch hai đầu → upper viết hoa. Học kết quả "EDGE-R1" thay vì cố nhớ một chữ cái khi đề bị trùng lựa chọn.
- **Lưu ý nguồn:** Chỉ có A, B, C; không có D. Hai lựa chọn A/C giống nhau. Trong ứng dụng luyện tập, chọn A hoặc C đều phải được tính đúng.

### Câu 36 (`cs466-036`)
**Câu hỏi:** Một REST API có endpoint:
POST /students
Request Body: {"name": "An", "score": 8.5}
Nếu dữ liệu được tạo mới thành công, HTTP Status Code phù hợp nhất là:

**Các lựa chọn:**
- **A.** 404 Not Found
- **B.** 500 Internal Server Error
- **C.** 201 Created
- **D.** 200 OK

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** 201 Created thể hiện yêu cầu đã thành công và tạo tài nguyên mới. 200 OK là thành công nói chung nên kém cụ thể hơn; 404 là không tìm thấy, 500 là lỗi phía server.
- **Mẹo làm bài:** Gạch chân “tạo mới” → Created → 201. Nhớ 200 thành công chung, 404 không tìm thấy, 500 lỗi server.

### Câu 37 (`cs466-037`)
**Câu hỏi:** Một inventory có nhiều địa chỉ IP bị lặp. Nếu chỉ cần tập hợp các địa chỉ duy nhất, kiểu dữ liệu nào phù hợp nhất?

**Các lựa chọn:**
- **A.** str
- **B.** tuple
- **C.** list
- **D.** set

👉 **Đáp án đúng:** **D**
- **Vì sao đúng:** set lưu các phần tử duy nhất, tự loại giá trị trùng. List và tuple vẫn có thể chứa phần tử lặp; str là chuỗi, không phải kiểu tập hợp phù hợp cho yêu cầu này.
- **Mẹo làm bài:** Chỉ cần duy nhất → set. Nếu đề yêu cầu giữ thứ tự xuất hiện đầu tiên, dùng cách như list(dict.fromkeys(items)); set không bảo đảm thứ tự đó.

### Câu 38 (`cs466-038`)
**Câu hỏi:** Cho đoạn mã sau. Kết quả là:
```python
name = " sw-core-01\n"
print(name.strip().upper())
```

**Các lựa chọn:**
- **A.** sw-core-01
- **B.** Error
- **C.** SW-CORE-01
- **D.** SW-CORE-01

👉 **Đáp án đúng:** **C hoặc D**
- **Vì sao đúng:** strip() bỏ whitespace hai đầu; upper() đổi chữ sang hoa, cho "SW-CORE-01". Các chữ số và dấu gạch nối giữ nguyên. A chưa chuyển chữ hoa; B sai vì code hợp lệ.
- **Mẹo làm bài:** upper chỉ đổi hoa/thường, không đổi chữ số và dấu gạch nối. Tính giá trị trước khi nhìn chữ cái đáp án.
- **Lưu ý nguồn:** C và D giống nhau. Trong ứng dụng luyện tập, chọn C hoặc D đều phải được tính đúng.

### Câu 39 (`cs466-039`)
**Câu hỏi:** Cho UDP Server sau. Biến addr chứa:
```python
server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server.bind(("0.0.0.0", 6000))
data, addr = server.recvfrom(1024)
```

**Các lựa chọn:**
- **A.** Nội dung Client gửi
- **B.** Địa chỉ IP của Server
- **C.** Địa chỉ IP và cổng của Client gửi dữ liệu
- **D.** Kích thước gói tin

👉 **Đáp án đúng:** **C**
- **Vì sao đúng:** recvfrom() trả dữ liệu nhận được và địa chỉ nguồn. Với IPv4, addr là tuple (IP, port) của bên gửi datagram. Nội dung nằm ở data; "0.0.0.0", 6000 trong bind() là địa chỉ phía Server, không phải giá trị nguồn trả về trong addr.
- **Mẹo làm bài:** recvfrom = nhận từ ai → data và địa chỉ người gửi. Phân biệt địa chỉ trong bind() với địa chỉ do recvfrom() trả về.
