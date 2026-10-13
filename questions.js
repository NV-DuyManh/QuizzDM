const quizData = [
    {
        "id": "cs466-001",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "devices = [{\"ip\":\"10.0.0.1\",\"up\":True},{\"ip\":\"10.0.0.2\",\"up\":False}]\nprint([d[\"ip\"] for d in devices if d[\"up\"]])",
        "o": [
            "[\"10.0.0.1\"]",
            "[\"10.0.0.2\"]",
            "[True]"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Điều kiện if d[\"up\"] chỉ giữ thiết bị có up=True. Thiết bị đầu được giữ, rồi d[\"ip\"] lấy IP \"10.0.0.1\". Thiết bị thứ hai có up=False nên bị loại. Kết quả là list IP, không phải list Boolean.",
        "tip": "Đọc list comprehension theo thứ tự: duyệt từng phần tử → kiểm tra if → lấy biểu thức ở đầu. Đừng thấy True trong điều kiện rồi chọn [True].",
        "sourceNote": "Đề gốc chỉ có A, B, C."
    },
    {
        "id": "cs466-002",
        "q": "Một REST API hỗ trợ:\nGET /students\nGET /students/5\nPOST /students\nDELETE /students/5\nPhát biểu nào sau đây đúng?",
        "code": "",
        "o": [
            "POST /students thường được sử dụng để tạo sinh viên mới.",
            "GET /students/5 dùng để xóa sinh viên có mã 5.",
            "DELETE /students/5 dùng để lấy thông tin sinh viên có mã 5.",
            "GET /students dùng để thêm sinh viên mới."
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Trong thiết kế REST thông dụng, POST /students tạo sinh viên mới. GET /students lấy danh sách, GET /students/5 lấy sinh viên có mã 5, còn DELETE /students/5 xóa sinh viên đó. B, C, D nhầm chức năng của phương thức.",
        "tip": "GET lấy — POST tạo — DELETE xóa. Đọc phương thức trước, sau đó mới đọc URL để xác định tài nguyên được tác động.",
        "sourceNote": ""
    },
    {
        "id": "cs466-003",
        "q": "Khi đọc một file cấu hình YAML thông thường bằng PyYAML, cách nào an toàn hơn?",
        "code": "",
        "o": [
            "pickle.loads(f.read())",
            "yaml.safe_load(f)",
            "yaml.load(f) không kiểm soát Loader",
            "eval(f.read())"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "safe_load() đọc các kiểu YAML thông thường và hạn chế khả năng dựng đối tượng Python tùy ý. eval() thực thi biểu thức Python; pickle không phải bộ đọc YAML và giải tuần tự dữ liệu không tin cậy có thể nguy hiểm. yaml.load() không kiểm soát Loader không đáp ứng yêu cầu an toàn hơn.",
        "tip": "Thấy YAML + đọc cấu hình + an toàn hơn → safe_load(). Phân biệt đọc dữ liệu với thực thi mã.",
        "sourceNote": ""
    },
    {
        "id": "cs466-004",
        "q": "Trên một TCP socket đã kết nối, cặp phương thức nào phù hợp để gửi toàn bộ buffer và nhận dữ liệu?",
        "code": "",
        "o": [
            "sendall()/recv()",
            "bind()/listen()",
            "connect()/accept()",
            "write()/read()"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "sendall() tiếp tục gửi đến khi hết buffer hoặc gặp lỗi; recv() nhận dữ liệu trên socket. bind/listen và connect/accept phục vụ thiết lập địa chỉ hoặc kết nối. write/read không phải cặp phương thức trực tiếp được hỏi của đối tượng socket này.",
        "tip": "sendall = gửi hết buffer hoặc báo lỗi; recv = nhận. Không suy ra rằng một lần recv() chắc chắn nhận hết dữ liệu đã gửi.",
        "sourceNote": ""
    },
    {
        "id": "cs466-005",
        "q": "Với Paramiko, chính sách nào phù hợp khi muốn từ chối host key chưa được tin cậy thay vì tự động chấp nhận?",
        "code": "",
        "o": [
            "AutoAddPolicy()",
            "RejectPolicy()",
            "WarningPolicy() luôn chấp nhận",
            "Không cần host-key policy"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "RejectPolicy() từ chối host key chưa có trong danh sách tin cậy. AutoAddPolicy() tự thêm khóa mới; WarningPolicy() cảnh báo rồi chấp nhận khóa chưa biết, nên không đáp ứng yêu cầu từ chối.",
        "tip": "Reject = từ chối; AutoAdd = tự thêm. Host key dùng để xác minh máy chủ SSH, không phải mật khẩu đăng nhập của người dùng.",
        "sourceNote": ""
    },
    {
        "id": "cs466-006",
        "q": "Cho đoạn code sau. Kết quả là:",
        "code": "d = {\"a\": 1, \"b\": 2}\nd[\"c\"] = d.get(\"a\", 0) + d.get(\"x\", 5)\nprint(d[\"c\"])",
        "o": [
            "5",
            "6",
            "1",
            "Lỗi"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Khóa \"a\" có giá trị 1, nên get(\"a\", 0) trả 1. Khóa \"x\" không tồn tại, nên get(\"x\", 5) trả mặc định 5. Tổng 1 + 5 = 6 được gán vào \"c\".",
        "tip": "Với get(k, mặc định): có khóa lấy giá trị, thiếu khóa lấy mặc định. Tính từng vế riêng rồi cộng.",
        "sourceNote": ""
    },
    {
        "id": "cs466-007",
        "q": "Netmiko phù hợp nhất cho trường hợp nào?",
        "code": "",
        "o": [
            "Tự động hóa tương tác CLI với nhiều platform thiết bị mạng qua SSH",
            "Xây dựng HTTP web server",
            "Huấn luyện mô hình machine learning",
            "Truy vấn cơ sở dữ liệu SQL"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Netmiko hỗ trợ kết nối và gửi lệnh CLI qua SSH tới nhiều nền tảng thiết bị mạng, đặc biệt router/switch. HTTP server, huấn luyện mô hình và truy vấn SQL không phải mục đích chính của thư viện.",
        "tip": "Nhận diện cụm router/switch + CLI + SSH theo platform → Netmiko. Không chọn theo từ “Python” chung chung.",
        "sourceNote": ""
    },
    {
        "id": "cs466-008",
        "q": "Cho đoạn code sau. Để đoạn code trên hoạt động đúng, dữ liệu Server trả về phù hợp nhất là:",
        "code": "response = requests.get(\"http://127.0.0.1:5000/students\")\nstudents = response.json()\nprint(students[0][\"name\"])",
        "o": [
            "[{\"name\": \"An\"}, {\"name\": \"Bình\"}]",
            "{\"name\": \"An\"}",
            "An, Bình",
            "{\"students\": \"An\"}"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "students[0] lấy phần tử đầu của list; phần tử này phải có khóa \"name\". A đáp ứng cấu trúc và in \"An\". B và D là đối tượng JSON không có cấu trúc list được yêu cầu; C không phải JSON hợp lệ như được trình bày.",
        "tip": "[0] chọn phần tử đầu; [\"name\"] chọn trường. Đi từ ngoài vào trong để suy ra cấu trúc: list bên ngoài, dictionary bên trong.",
        "sourceNote": ""
    },
    {
        "id": "cs466-009",
        "q": "Cho đoạn mã sau. Kết quả được in ra là:",
        "code": "devices = [\"R1\", \"R2\", \"SW1\"]\nfor i, d in enumerate(devices, start=10):\n    print(f\"{i}:{d}\", end=\" \")",
        "o": [
            "0:R1 1:R2 2:SW1",
            "10:R1 11:R2 12:SW1",
            "R1:10 R2:11 SW1:12",
            "Error"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "enumerate(..., start=10) đánh số 10, 11, 12. F-string {i}:{d} in số trước, tên thiết bị sau. end=\" \" giữ các kết quả trên cùng dòng, ngăn cách bằng dấu cách.",
        "tip": "Kiểm tra hai điểm: bắt đầu từ bao nhiêu và số hay tên được in trước. A sai điểm bắt đầu; C đảo thứ tự.",
        "sourceNote": ""
    },
    {
        "id": "cs466-010",
        "q": "Cho đoạn code sau. Kết quả là:",
        "code": "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        "o": [
            "[4]",
            "[1, 2, 3]",
            "Lỗi",
            "[1, 2, 3, 4]"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "y = x làm hai biến cùng tham chiếu một list, không tạo bản sao. append(4) thêm phần tử vào list chung, nên đọc qua x cũng thấy phần tử mới.",
        "tip": "y = x dùng chung; y = x.copy() tạo list khác. Với câu hỏi list, xác định biến đang dùng chung hay dùng bản sao trước khi tính kết quả.",
        "sourceNote": ""
    },
    {
        "id": "cs466-011",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "base = {\"timeout\": 3, \"retries\": 2}\noverride = {\"timeout\": 5}\ncfg = {**base, **override}\nprint(cfg[\"timeout\"], cfg[\"retries\"])",
        "o": [
            "5 3",
            "3 2",
            "Error",
            "5 2"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "Dictionary phía sau ghi đè giá trị của khóa trùng. \"timeout\" trở thành 5, còn \"retries\" không bị ghi đè nên vẫn là 2.",
        "tip": "Khóa trùng: bên sau thắng; khóa không trùng: giữ lại. Không cộng các giá trị khi gặp cú pháp gộp dictionary.",
        "sourceNote": ""
    },
    {
        "id": "cs466-012",
        "q": "Trong TCP server, phương thức nào dùng để gắn socket với địa chỉ IP và cổng cục bộ?",
        "code": "",
        "o": [
            "connect()",
            "bind()",
            "accept()",
            "recv()"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "bind() gắn socket vào IP và cổng cục bộ. connect() kết nối tới địa chỉ đích; accept() nhận kết nối; recv() nhận dữ liệu.",
        "tip": "bind gắn — connect nối — accept nhận kết nối — recv nhận dữ liệu. Chú ý câu hỏi đang nói về thiết lập hay trao đổi dữ liệu.",
        "sourceNote": ""
    },
    {
        "id": "cs466-013",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "import re\nresult = bool(re.fullmatch(r\"Gi\\d+/\\d+\", \"Gi0/1\"))\nprint(result)",
        "o": [
            "Error",
            "False",
            "True",
            "None"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Mẫu yêu cầu Gi, một hoặc nhiều chữ số, dấu /, rồi một hoặc nhiều chữ số. \"Gi0/1\" khớp toàn bộ. fullmatch() trả đối tượng Match và bool() chuyển nó thành True.",
        "tip": "\\d = chữ số; + = ít nhất một; fullmatch = khớp cả chuỗi. Đừng nhầm với search() chỉ cần khớp một đoạn.",
        "sourceNote": ""
    },
    {
        "id": "cs466-014",
        "q": "Điểm khác biệt đúng giữa TCP và UDP là:",
        "code": "",
        "o": [
            "TCP có cơ chế kết nối và hỗ trợ truyền dữ liệu tin cậy hơn UDP.",
            "UDP đảm bảo dữ liệu luôn đến đúng thứ tự.",
            "TCP không cần thiết lập kết nối, UDP cần kết nối.",
            "TCP chỉ sử dụng được trong mạng LAN."
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "TCP hướng kết nối, có cơ chế xác nhận, truyền lại và cung cấp luồng bytes đúng thứ tự. UDP không tự bảo đảm giao nhận hoặc thứ tự. C đảo ngược đặc điểm; D sai vì TCP có thể dùng qua Internet.",
        "tip": "TCP: kết nối, truyền lại, đúng thứ tự. UDP: datagram, không tự bảo đảm các điều đó. Tránh các lựa chọn có từ tuyệt đối như “luôn” khi chúng trái đặc điểm giao thức.",
        "sourceNote": ""
    },
    {
        "id": "cs466-015",
        "q": "Trong Python, kết quả của đoạn code sau là gì?",
        "code": "data = [10, 20, 30, 40, 50]\nprint(data[-4:-1])",
        "o": [
            "[10, 20, 30]",
            "[20, 30, 40]",
            "[20, 30, 40, 50]",
            "[30, 40, 50]"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "-4 trỏ tới 20; chỉ số kết thúc -1 trỏ tới 50 nhưng không được lấy. Lát cắt gồm 20, 30, 40.",
        "tip": "Chỉ số âm đếm từ cuối; lát cắt lấy đầu, bỏ cuối. Đánh dấu hai mốc trước rồi mới chọn phần tử.",
        "sourceNote": ""
    },
    {
        "id": "cs466-016",
        "q": "Một script nhận số cổng dưới dạng chuỗi \"443\". Phương thức nào thích hợp để kiểm tra chuỗi không rỗng và tất cả ký tự đều là chữ số?",
        "code": "",
        "o": [
            "isspace()",
            "isalpha()",
            "isdigit()",
            "isprintable()"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "isdigit() trả True khi chuỗi có ít nhất một ký tự và mọi ký tự đều là chữ số. isspace() kiểm tra ký tự trắng; isalpha() kiểm tra chữ; isprintable() kiểm tra khả năng hiển thị.",
        "tip": "digit = chữ số. \"\".isdigit() là False. Để xác thực cổng thực tế còn cần kiểm tra khoảng giá trị; isdigit() còn chấp nhận một số chữ số Unicode.",
        "sourceNote": ""
    },
    {
        "id": "cs466-017",
        "q": "Cho đoạn code sau. Kết quả là:",
        "code": "numbers = (10, 20, 30, 40)\nprint(numbers[-1])",
        "o": [
            "10",
            "30",
            "40",
            "20"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Chỉ số -1 truy cập phần tử cuối tuple, ở đây là 40. Tuple hỗ trợ truy cập bằng chỉ số âm giống list.",
        "tip": "[0] đầu tiên — [-1] cuối cùng — [-2] áp cuối.",
        "sourceNote": ""
    },
    {
        "id": "cs466-018",
        "q": "Cho đoạn code sau. Kết quả là:",
        "code": "s = \"python-api\"\nprint(s.startswith(\"py\") and s.endswith(\"api\"))",
        "o": [
            "False",
            "True",
            "python-api",
            "Lỗi"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Chuỗi bắt đầu bằng \"py\" và kết thúc bằng \"api\", nên hai điều kiện đều True. Kết quả được in là Boolean, không phải chuỗi gốc.",
        "tip": "startswith kiểm tra đầu; endswith kiểm tra cuối; and cần cả hai đúng. Tính từng điều kiện riêng trước khi nối bằng and.",
        "sourceNote": ""
    },
    {
        "id": "cs466-019",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "devices = [\"R1\", \"R2\", \"R3\"]\nfor i, d in enumerate(devices, start=1):\n    print(f\"{i}:{d}\", end=\" \")",
        "o": [
            "R1:1 R2:2 R3:3",
            "Error",
            "1:R1 2:R2 3:R3",
            "0:R1 1:R2 2:R3"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Số thứ tự bắt đầu từ 1, lần lượt ghép với R1, R2, R3. F-string đặt số trước tên, còn end=\" \" giữ kết quả trên cùng dòng.",
        "tip": "Nhìn start=1 và {i}:{d}. A đảo thứ tự; D bỏ qua tham số start.",
        "sourceNote": ""
    },
    {
        "id": "cs466-020",
        "q": "Đoạn mã post-check sau in ra giá trị nào?",
        "code": "expected = {\"R1\": \"up\"}\nactual = {\"R1\": \"up\"}\nprint(actual[\"R1\"] == expected[\"R1\"])",
        "o": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Giá trị ở khóa \"R1\" của hai dictionary đều là \"up\". Hai chuỗi bằng nhau nên == trả True.",
        "tip": "= gán; == so sánh. Post-check so trạng thái thực tế với mong đợi; kết quả True ở đây chỉ chứng minh hai giá trị bằng nhau.",
        "sourceNote": ""
    },
    {
        "id": "cs466-021",
        "q": "Một script network automation chạy trên CI/CD cần token để gọi REST API. Cách quản lý token nào phù hợp nhất?",
        "code": "",
        "o": [
            "Đặt token làm một phần của tên file cấu hình",
            "Hardcode token trực tiếp trong source code",
            "Ghi token vào file log để dễ kiểm tra",
            "Sử dụng secret manager hoặc cơ chế cung cấp secret tại runtime, áp dụng quyền tối thiểu và không ghi secret vào log"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "Cấp token khi chạy giúp tránh lưu bí mật trong source code. Quyền tối thiểu giới hạn tác động của token, còn không ghi secret vào log giảm nguy cơ rò rỉ. Tên file, mã nguồn và log đều không phải nơi phù hợp để công khai token.",
        "tip": "Nhớ ba ý cấp lúc chạy — quyền tối thiểu — không lộ log. Không nhầm “dễ kiểm tra” với quản lý secret đúng cách.",
        "sourceNote": ""
    },
    {
        "id": "cs466-022",
        "q": "Trong Python, json.dumps(payload) chủ yếu dùng để làm gì?",
        "code": "",
        "o": [
            "Chuyển đối tượng Python thành chuỗi JSON",
            "Đọc chuỗi JSON thành dictionary",
            "Mở kết nối TCP",
            "Đọc file YAML an toàn"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "json.dumps() chuyển đối tượng Python được hỗ trợ thành chuỗi JSON. json.loads() làm chiều ngược lại. Đây là chuyển đổi dữ liệu, không mở kết nối hay đọc YAML.",
        "tip": "dumps ghi JSON — loads đọc JSON. Chữ s gắn với xử lý chuỗi; dumps() chưa tạo bytes để gửi qua socket.",
        "sourceNote": ""
    },
    {
        "id": "cs466-023",
        "q": "Cho output CLI là \" Gi0/1 up \". Nếu chỉ muốn loại bỏ whitespace ở đầu chuỗi và giữ nguyên whitespace ở cuối, phương thức phù hợp là:",
        "code": "",
        "o": [
            "lstrip()",
            "replace()",
            "strip()",
            "rstrip()"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "lstrip() chỉ loại whitespace đầu chuỗi. rstrip() xử lý cuối, còn strip() xử lý cả hai đầu nên không đáp ứng yêu cầu giữ whitespace ở cuối. replace() cần chỉ rõ nội dung thay thế và không phải lựa chọn trực tiếp phù hợp nhất.",
        "tip": "L=Left, R=Right. Gạch chân từ “chỉ” và “giữ nguyên” để không chọn nhầm strip().",
        "sourceNote": ""
    },
    {
        "id": "cs466-024",
        "q": "Trong TCP Server, phương thức accept() thường:",
        "code": "",
        "o": [
            "Gửi dữ liệu cho Client",
            "Đóng Socket",
            "Chuyển chuỗi sang byte",
            "Chờ cho đến khi có Client kết nối"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "Trên listening socket ở chế độ blocking thông thường, accept() chờ kết nối đến rồi trả socket kết nối mới và địa chỉ Client. Gửi dùng sendall(), đóng dùng close(), đổi chuỗi thành bytes dùng encode().",
        "tip": "listen lắng nghe — accept nhận kết nối. Với non-blocking hoặc timeout, hành vi chờ có thể khác; đề dùng từ “thường”.",
        "sourceNote": ""
    },
    {
        "id": "cs466-025",
        "q": "Trong logging, cách nào phù hợp hơn để tránh lộ token bí mật?",
        "code": "",
        "o": [
            "Ghi toàn bộ token ở mức DEBUG",
            "Mask/redact giá trị nhạy cảm trước khi ghi log",
            "Nối token vào exception message",
            "In toàn bộ biến môi trường"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Mask/redact là che hoặc loại bỏ thông tin nhạy cảm trước khi ghi log. DEBUG vẫn là log và có thể bị thu thập; exception message và biến môi trường cũng có thể chứa token.",
        "tip": "Log sự kiện cần biết, không log bí mật. Không chọn DEBUG chỉ vì nghĩ mức này “ẩn” hoặc chỉ dùng lúc phát triển.",
        "sourceNote": ""
    },
    {
        "id": "cs466-026",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "devices = [\n    {\"name\": \"R1\", \"latency\": 15},\n    {\"name\": \"R2\", \"latency\": 8},\n    {\"name\": \"R3\", \"latency\": 20}\n]\nbest = min(devices, key=lambda d: d[\"latency\"])\nprint(best[\"name\"])",
        "o": [
            "R3",
            "R2",
            "Error",
            "R1"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "key yêu cầu so sánh các thiết bị theo latency. Giá trị nhỏ nhất trong 15, 8, 20 là 8, thuộc R2. min() trả về dictionary của R2 rồi [\"name\"] lấy tên.",
        "tip": "Xem key trước để biết tiêu chí; min nhỏ nhất, max lớn nhất. Đừng so tên thiết bị khi key đang lấy độ trễ.",
        "sourceNote": ""
    },
    {
        "id": "cs466-027",
        "q": "Cho đoạn code sau. Kết quả là:",
        "code": "def tinh(a, b=2):\n    return a * b\nprint(tinh(5))",
        "o": [
            "5",
            "7",
            "10",
            "Lỗi do thiếu tham số b"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "a=5; không truyền b nên dùng giá trị mặc định 2. Hàm tính 5 * 2 và trả 10, sau đó print() hiển thị kết quả.",
        "tip": "Không truyền tham số thì dùng mặc định nếu có. Thay giá trị vào công thức trước khi tính; không cộng khi hàm dùng dấu *.",
        "sourceNote": ""
    },
    {
        "id": "cs466-028",
        "q": "Cho đoạn code phía Client sau. Lệnh recv(1024) có ý nghĩa là:",
        "code": "client.sendall(\"Hello\".encode(\"utf-8\"))\ndata = client.recv(1024)",
        "o": [
            "Gửi 1024 byte dữ liệu",
            "Chờ 1024 Client kết nối",
            "Nhận chính xác 1024 ký tự",
            "Nhận tối đa 1024 byte dữ liệu"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "recv(1024) nhận tối đa 1024 bytes trong lần gọi đó. Dữ liệu thực nhận có thể ít hơn; giá trị trả về là bytes, không phải số ký tự Unicode.",
        "tip": "recv(N) = nhận tối đa N bytes. Hai bẫy cần tránh là “chính xác” và “ký tự”.",
        "sourceNote": ""
    },
    {
        "id": "cs466-029",
        "q": "Cho TCP Server sau. Biến conn được sử dụng để:",
        "code": "server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind((\"127.0.0.1\", 9001))\nserver.listen(5)\nconn, addr = server.accept()",
        "o": [
            "Trao đổi dữ liệu với Client đã kết nối",
            "Chứa địa chỉ IP của Server",
            "Lắng nghe các kết nối mới",
            "Chứa số cổng của Client"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "accept() trả connected socket conn và địa chỉ Client addr. conn dùng để gửi/nhận với Client đó; server là listening socket. Vì vậy conn không phải địa chỉ hay số cổng.",
        "tip": "server đón kết nối — conn trao đổi dữ liệu — addr chứa địa chỉ. Nhớ hai socket có hai vai trò khác nhau.",
        "sourceNote": ""
    },
    {
        "id": "cs466-030",
        "q": "Cho đoạn code sau. Kết quả là:",
        "code": "numbers = [1, 2, 3, 4, 5]\nresult = [x * 2 for x in numbers if x % 2 == 1]\nprint(result)",
        "o": [
            "[1, 3, 5]",
            "[2, 6, 10]",
            "[2, 4, 6, 8, 10]",
            "[4, 8]"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Điều kiện % 2 == 1 giữ số lẻ 1, 3, 5; nhân từng số với 2 được 2, 6, 10. A chỉ lọc mà chưa nhân; C bỏ qua điều kiện; D xử lý số chẵn.",
        "tip": "Lọc trước → nhân sau. % 2 == 1 chọn lẻ; % 2 == 0 chọn chẵn.",
        "sourceNote": ""
    },
    {
        "id": "cs466-031",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "import json\nraw = '{\"device\":\"R1\",\"status\":\"up\"}'\ndata = json.loads(raw)\nprint(data.get(\"status\"))",
        "o": [
            "up",
            "R1",
            "status"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "json.loads() chuyển chuỗi JSON thành dictionary. get(\"status\") lấy giá trị \"up\", không lấy tên khóa \"status\" hoặc giá trị của khóa \"device\".",
        "tip": "loads đọc JSON — get lấy theo khóa. Phân biệt tên khóa với giá trị của khóa.",
        "sourceNote": "Đề gốc chỉ có A, B, C."
    },
    {
        "id": "cs466-032",
        "q": "Ansible check mode chủ yếu được dùng để làm gì?",
        "code": "",
        "o": [
            "Mô phỏng/ước lượng thay đổi đối với module hỗ trợ mà chưa áp dụng thay đổi",
            "Tự động rollback mọi lỗi",
            "Bỏ qua inventory",
            "Tắt SSH trên host đích"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Check mode giúp xem thay đổi dự kiến của module có hỗ trợ. Nó không tự hoàn tác, không bỏ qua inventory và không tắt SSH. Không phải mọi module đều mô phỏng đầy đủ; task không hỗ trợ có thể bị bỏ qua.",
        "tip": "Check = xem trước; rollback = khôi phục sau thay đổi. Chú ý cụm “module hỗ trợ”; không suy ra mọi task đều được mô phỏng.",
        "sourceNote": ""
    },
    {
        "id": "cs466-033",
        "q": "Đoạn mã nào phù hợp hơn cho một script gọi REST API cần tránh chờ vô hạn và cần phát hiện HTTP 4xx/5xx?",
        "code": "",
        "o": [
            "r = requests.get(url, timeout=5); r.raise_for_status()",
            "requests.get(url, verify=False)",
            "requests.get(url)",
            "eval(requests.get(url).text)"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "timeout=5 giới hạn chờ kết nối/đọc; raise_for_status() báo HTTPError cho phản hồi 4xx/5xx. verify=False chỉ tắt xác minh TLS; gọi GET không timeout không đáp ứng yêu cầu giới hạn chờ. eval() thực thi nội dung và không phải cách xử lý phản hồi an toàn.",
        "tip": "Có hai yêu cầu thì tìm đủ hai thao tác: timeout cho thời gian chờ + raise_for_status cho HTTP lỗi. Timeout không phải giới hạn tổng thời gian tuyệt đối của toàn request.",
        "sourceNote": ""
    },
    {
        "id": "cs466-034",
        "q": "Trong Ansible, tùy chọn --limit hữu ích nhất để làm gì?",
        "code": "",
        "o": [
            "Giới hạn phạm vi host được chạy playbook",
            "Tăng số CPU của host",
            "Tự động tạo secret",
            "Thay thế inventory"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "--limit thu hẹp tập host trong phạm vi host mà play đã chọn, dựa trên tên, nhóm hoặc mẫu. Nó không thay thế inventory và không thay tài nguyên máy hay tạo secret.",
        "tip": "Inventory khai báo host — play chọn host — limit thu hẹp phạm vi. “Limit” nghĩa là giới hạn.",
        "sourceNote": ""
    },
    {
        "id": "cs466-035",
        "q": "Cho đoạn mã sau. Kết quả được in ra là:",
        "code": "label = \" edge-r1\\n\"\nprint(label.strip().upper())",
        "o": [
            "EDGE-R1",
            "edge-r1",
            "EDGE-R1"
        ],
        "a": 0,
        "correctAnswers": [
            0,
            2
        ],
        "explanation": "strip() bỏ whitespace hai đầu, gồm dấu cách đầu và ký tự xuống dòng cuối. upper() đổi chữ thành hoa, tạo \"EDGE-R1\". B chưa chuyển chữ hoa. A và C cùng hiển thị kết quả đúng.",
        "tip": "strip làm sạch hai đầu → upper viết hoa. Học kết quả \"EDGE-R1\" thay vì cố nhớ một chữ cái khi đề bị trùng lựa chọn.",
        "sourceNote": "Chỉ có A, B, C; không có D. Hai lựa chọn A/C giống nhau. Trong ứng dụng luyện tập, chọn A hoặc C đều phải được tính đúng."
    },
    {
        "id": "cs466-036",
        "q": "Một REST API có endpoint:\nPOST /students\nRequest Body: {\"name\": \"An\", \"score\": 8.5}\nNếu dữ liệu được tạo mới thành công, HTTP Status Code phù hợp nhất là:",
        "code": "",
        "o": [
            "404 Not Found",
            "500 Internal Server Error",
            "201 Created",
            "200 OK"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "201 Created thể hiện yêu cầu đã thành công và tạo tài nguyên mới. 200 OK là thành công nói chung nên kém cụ thể hơn; 404 là không tìm thấy, 500 là lỗi phía server.",
        "tip": "Gạch chân “tạo mới” → Created → 201. Nhớ 200 thành công chung, 404 không tìm thấy, 500 lỗi server.",
        "sourceNote": ""
    },
    {
        "id": "cs466-037",
        "q": "Một inventory có nhiều địa chỉ IP bị lặp. Nếu chỉ cần tập hợp các địa chỉ duy nhất, kiểu dữ liệu nào phù hợp nhất?",
        "code": "",
        "o": [
            "str",
            "tuple",
            "list",
            "set"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "set lưu các phần tử duy nhất, tự loại giá trị trùng. List và tuple vẫn có thể chứa phần tử lặp; str là chuỗi, không phải kiểu tập hợp phù hợp cho yêu cầu này.",
        "tip": "Chỉ cần duy nhất → set. Nếu đề yêu cầu giữ thứ tự xuất hiện đầu tiên, dùng cách như list(dict.fromkeys(items)); set không bảo đảm thứ tự đó.",
        "sourceNote": ""
    },
    {
        "id": "cs466-038",
        "q": "Cho đoạn mã sau. Kết quả là:",
        "code": "name = \" sw-core-01\\n\"\nprint(name.strip().upper())",
        "o": [
            "sw-core-01",
            "Error",
            "SW-CORE-01",
            "SW-CORE-01"
        ],
        "a": 2,
        "correctAnswers": [
            2,
            3
        ],
        "explanation": "strip() bỏ whitespace hai đầu; upper() đổi chữ sang hoa, cho \"SW-CORE-01\". Các chữ số và dấu gạch nối giữ nguyên. A chưa chuyển chữ hoa; B sai vì code hợp lệ.",
        "tip": "upper chỉ đổi hoa/thường, không đổi chữ số và dấu gạch nối. Tính giá trị trước khi nhìn chữ cái đáp án.",
        "sourceNote": "C và D giống nhau. Trong ứng dụng luyện tập, chọn C hoặc D đều phải được tính đúng."
    },
    {
        "id": "cs466-039",
        "q": "Cho UDP Server sau. Biến addr chứa:",
        "code": "server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nserver.bind((\"0.0.0.0\", 6000))\ndata, addr = server.recvfrom(1024)",
        "o": [
            "Nội dung Client gửi",
            "Địa chỉ IP của Server",
            "Địa chỉ IP và cổng của Client gửi dữ liệu",
            "Kích thước gói tin"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "recvfrom() trả dữ liệu nhận được và địa chỉ nguồn. Với IPv4, addr là tuple (IP, port) của bên gửi datagram. Nội dung nằm ở data; \"0.0.0.0\", 6000 trong bind() là địa chỉ phía Server, không phải giá trị nguồn trả về trong addr.",
        "tip": "recvfrom = nhận từ ai → data và địa chỉ người gửi. Phân biệt địa chỉ trong bind() với địa chỉ do recvfrom() trả về.",
        "sourceNote": ""
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
