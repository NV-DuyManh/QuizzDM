const quizData = [
    {
        "id": "se433cis-001",
        "q": "What is a software process?",
        "code": "",
        "o": [
            "A programming language",
            "A structured set of activities for developing and maintaining software",
            "A hardware configuration",
            "A single testing technique"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Quy trình phần mềm là tập hợp hoạt động có tổ chức để xây dựng và bảo trì phần mềm; không phải một ngôn ngữ hay kỹ thuật kiểm thử riêng lẻ.",
        "tip": "Software process → activities + developing + maintaining.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-002",
        "q": "Which activity focuses on identifying what the software must do?",
        "code": "",
        "o": [
            "Deployment",
            "Maintenance",
            "Requirements engineering",
            "Coding"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Requirements engineering xác định nhu cầu, chức năng và các ràng buộc mà phần mềm phải đáp ứng. Coding là triển khai những yêu cầu đó.",
        "tip": "What the software must do → Requirements engineering.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-003",
        "q": "What is the main output of requirements analysis?",
        "code": "",
        "o": [
            "Requirements specification",
            "Executable code",
            "User training plan",
            "Server logs"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Phân tích yêu cầu tạo cơ sở cho bản đặc tả yêu cầu, mô tả điều hệ thống cần thực hiện. Mã thực thi thuộc giai đoạn triển khai.",
        "tip": "Requirements analysis → Requirements specification.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-004",
        "q": "Which model follows sequential phases with limited iteration?",
        "code": "",
        "o": [
            "Spiral",
            "Waterfall",
            "Scrum",
            "Incremental"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Waterfall tổ chức công việc theo các giai đoạn tuần tự, với khả năng lặp lại hạn chế trong mô hình mô tả ở đề.",
        "tip": "Sequential phases → Waterfall.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-005",
        "q": "Which model delivers software in multiple usable releases?",
        "code": "",
        "o": [
            "Big Bang",
            "Waterfall only",
            "Incremental development",
            "Code-and-fix"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Incremental development bàn giao sản phẩm theo các phần tăng trưởng có thể sử dụng được, thay vì đợi một lần bàn giao duy nhất.",
        "tip": "Multiple usable releases → Incremental development.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-006",
        "q": "What is a major limitation of the Waterfall model?",
        "code": "",
        "o": [
            "No documentation",
            "Difficulty accommodating late requirement changes",
            "No testing phase",
            "No project planning"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Các giai đoạn tuần tự của Waterfall khiến thay đổi yêu cầu muộn thường kéo theo việc làm lại nhiều sản phẩm đã hoàn thành. Mô hình vẫn có tài liệu, kiểm thử và kế hoạch.",
        "tip": "Waterfall + limitation → late requirement changes.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-007",
        "q": "Which activity checks whether software meets specified requirements?",
        "code": "",
        "o": [
            "Verification",
            "Marketing",
            "Procurement",
            "Recruitment"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Verification kiểm tra sản phẩm có tuân thủ các yêu cầu đã đặc tả hay không. Các lựa chọn còn lại không phải hoạt động kiểm tra sự phù hợp này.",
        "tip": "Specified requirements → Verification.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-008",
        "q": "Which statement best describes validation?",
        "code": "",
        "o": [
            "Are we building the product right?",
            "Are we building the right product?",
            "Is the code formatted?",
            "Is the server online?"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Validation xem sản phẩm có giải quyết đúng nhu cầu sử dụng hay không. Cụm building the right product phân biệt với verification là building the product right.",
        "tip": "Validation → right product; Verification → product right.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-009",
        "q": "What is the purpose of software architecture design?",
        "code": "",
        "o": [
            "Define high-level components and their relationships",
            "Write user manuals only",
            "Eliminate all defects",
            "Estimate salaries"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Thiết kế kiến trúc xác định cấu trúc tổng thể, các thành phần cấp cao và quan hệ giữa chúng; không thể tự bảo đảm loại bỏ mọi lỗi.",
        "tip": "Architecture → components + relationships.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-010",
        "q": "Which artifact records changes and versions of source code?",
        "code": "",
        "o": [
            "Risk matrix",
            "Version control repository",
            "Invoice",
            "Organizational chart"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Kho quản lý phiên bản lưu lịch sử thay đổi và các phiên bản mã nguồn. Risk matrix dùng cho rủi ro, không quản lý phiên bản code.",
        "tip": "Changes and versions of source code → Version control repository.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-011",
        "q": "Which testing level examines individual functions or classes?",
        "code": "",
        "o": [
            "Acceptance testing",
            "System testing",
            "Unit testing",
            "Deployment testing"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Unit testing tập trung vào đơn vị nhỏ như hàm hoặc lớp, giúp kiểm tra hành vi của từng đơn vị trước khi xét toàn hệ thống.",
        "tip": "Individual functions/classes → Unit testing.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-012",
        "q": "Which testing level focuses on interactions among components?",
        "code": "",
        "o": [
            "Integration testing",
            "Unit testing",
            "Static analysis",
            "User training"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Integration testing kiểm tra tương tác và giao tiếp giữa các thành phần khi chúng được kết hợp với nhau.",
        "tip": "Interactions among components → Integration testing.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-013",
        "q": "What is a key objective of software maintenance?",
        "code": "",
        "o": [
            "Prevent all future changes",
            "Modify software after delivery to fix or improve it",
            "Replace all developers",
            "Stop monitoring defects"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Bảo trì diễn ra sau bàn giao để sửa lỗi, thích nghi hoặc cải thiện phần mềm. Bảo trì không có nghĩa ngăn mọi thay đổi.",
        "tip": "After delivery + fix/improve → Maintenance.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-014",
        "q": "Which is a functional requirement?",
        "code": "",
        "o": [
            "Response time below two seconds",
            "Encrypt data at rest",
            "Users can reset passwords",
            "99.9% availability"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Cho phép người dùng đặt lại mật khẩu là một chức năng hệ thống cung cấp. Các lựa chọn về thời gian đáp ứng và độ sẵn sàng nêu thuộc tính chất lượng.",
        "tip": "Functional → hệ thống làm được việc gì.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-015",
        "q": "Which is a non-functional requirement?",
        "code": "",
        "o": [
            "Create a customer account",
            "Generate a receipt",
            "Search products",
            "Support 1,000 concurrent users"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "Hỗ trợ 1.000 người dùng đồng thời mô tả năng lực hoặc hiệu năng của hệ thống, không phải một thao tác nghiệp vụ như tạo tài khoản hay tìm kiếm.",
        "tip": "Concurrent users → Non-functional requirement.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-016",
        "q": "Why is traceability important?",
        "code": "",
        "o": [
            "It replaces testing",
            "It links requirements to design, code, and tests",
            "It removes the need for documentation",
            "It guarantees zero defects"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Traceability liên kết yêu cầu với thiết kế, mã và kiểm thử để kiểm tra độ bao phủ và đánh giá ảnh hưởng khi thay đổi. Nó không thay thế kiểm thử.",
        "tip": "Traceability → links requirements, design, code, tests.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-017",
        "q": "Which approach explicitly addresses risks in repeated cycles?",
        "code": "",
        "o": [
            "Waterfall",
            "V-model",
            "Spiral model",
            "Big Bang"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Spiral phát triển theo các vòng lặp có chú trọng xác định và xử lý rủi ro. Chính yếu tố rủi ro lặp lại là dấu hiệu phân biệt trong đề.",
        "tip": "Risks + repeated cycles → Spiral.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-018",
        "q": "In the V-model, test planning is closely associated with what?",
        "code": "",
        "o": [
            "Development stages",
            "Payroll",
            "Hardware disposal",
            "Marketing campaigns"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "V-model liên hệ các hoạt động kiểm thử với các giai đoạn phát triển tương ứng, hỗ trợ lập kế hoạch kiểm thử sớm.",
        "tip": "V-model → development stages đi cùng test planning.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-019",
        "q": "Which metric directly describes defect density?",
        "code": "",
        "o": [
            "Defects per unit of software size",
            "Number of meetings",
            "Total staff salary",
            "Number of customers"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Defect density là số lỗi trên một đơn vị kích thước phần mềm, ví dụ số lỗi trên một nghìn dòng mã. Chỉ đếm số lỗi chưa thể hiện mật độ nếu không có kích thước.",
        "tip": "Density → defects / software size.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-020",
        "q": "Which activity ensures changes are evaluated and controlled?",
        "code": "",
        "o": [
            "Change management",
            "Random refactoring",
            "Unreviewed deployment",
            "Informal coding"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Change management giúp thay đổi được ghi nhận, đánh giá và kiểm soát trước khi thực hiện; triển khai không xem xét đi ngược mục tiêu đó.",
        "tip": "Evaluated and controlled changes → Change management.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-021",
        "q": "What is the primary goal of software process improvement?",
        "code": "",
        "o": [
            "Increase paperwork regardless of value",
            "Improve process capability and outcomes",
            "Remove all project roles",
            "Avoid measurement"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Cải tiến quy trình nhằm nâng cao năng lực thực hiện và kết quả thực tế. Tăng giấy tờ không tạo giá trị không phải mục tiêu chính.",
        "tip": "Process improvement → capability + outcomes.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-022",
        "q": "Which cycle is commonly used for continuous improvement?",
        "code": "",
        "o": [
            "PDCA",
            "FIFO",
            "HTTP",
            "CRUD"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "PDCA gồm Plan, Do, Check, Act: lập kế hoạch, thực hiện, kiểm tra và điều chỉnh để tiếp tục cải tiến.",
        "tip": "Continuous improvement → PDCA.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-023",
        "q": "In PDCA, what does Check involve?",
        "code": "",
        "o": [
            "Implementing the plan",
            "Measuring results against objectives",
            "Hiring staff",
            "Writing new code only"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Check đo lường, xem xét kết quả so với mục tiêu. Thực hiện kế hoạch thuộc bước Do, còn điều chỉnh thuộc Act.",
        "tip": "Check → measuring results against objectives.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-024",
        "q": "What is a process baseline?",
        "code": "",
        "o": [
            "A starting measurement of current performance",
            "The final product release",
            "A programming standard",
            "A user interface mockup"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Process baseline là mốc đo lường hiệu suất hiện tại, làm cơ sở so sánh khi đánh giá sự thay đổi hoặc cải tiến.",
        "tip": "Baseline → mốc ban đầu để so sánh.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-025",
        "q": "What does defect escape rate describe?",
        "code": "",
        "o": [
            "Defects found before coding",
            "Defects that reach a later phase or production",
            "Lines of code written",
            "Test cases executed"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Defect escape mô tả lỗi không được phát hiện ở giai đoạn dự kiến và lọt sang giai đoạn sau hoặc môi trường vận hành.",
        "tip": "Escape → lỗi lọt qua sang later phase/production.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-026",
        "q": "Which level emphasizes statistical and quantitative management of performance?",
        "code": "",
        "o": [
            "Level 1",
            "Level 2",
            "Level 3",
            "Level 4"
        ],
        "a": 3,
        "correctAnswers": [
            3
        ],
        "explanation": "Trong các mức trưởng thành CMMI, Level 4 là Quantitatively Managed, nhấn mạnh quản lý hiệu suất bằng định lượng và phương pháp thống kê.",
        "tip": "Statistical/quantitative management → Level 4.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-027",
        "q": "What is the purpose of a CMMI appraisal?",
        "code": "",
        "o": [
            "Evaluate implementation against model practices and identify strengths/gaps",
            "Guarantee zero defects",
            "Replace customer testing",
            "Approve a product license"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "CMMI appraisal đánh giá việc áp dụng các thực hành của mô hình, xác định điểm mạnh và khoảng thiếu để cải tiến. Nó không bảo đảm sản phẩm không có lỗi.",
        "tip": "Appraisal → evaluate practices + strengths/gaps.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-028",
        "q": "Which activity best demonstrates requirements management?",
        "code": "",
        "o": [
            "Tracking requirement changes and maintaining traceability",
            "Writing code without approval",
            "Ignoring stakeholder feedback",
            "Skipping acceptance criteria"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Quản lý yêu cầu bao gồm theo dõi thay đổi và duy trì khả năng truy vết, giúp các bên biết tác động của yêu cầu mới hoặc được sửa.",
        "tip": "Requirements management → changes + traceability.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-029",
        "q": "What is a process asset?",
        "code": "",
        "o": [
            "A reusable organizational process template, guideline, or checklist",
            "A physical server only",
            "A customer invoice",
            "An untracked bug"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Process asset là tài sản quy trình có thể tái sử dụng như mẫu biểu, hướng dẫn hoặc checklist của tổ chức; không chỉ là thiết bị vật lý.",
        "tip": "Process asset → reusable template/guideline/checklist.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-030",
        "q": "What is a common mistake when implementing CMMI?",
        "code": "",
        "o": [
            "Using evidence to improve decisions",
            "Treating documentation as the goal instead of improving performance",
            "Training process owners",
            "Reviewing outcomes"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Xem tài liệu là đích đến thay vì công cụ cải thiện hiệu suất là lỗi triển khai CMMI. Các lựa chọn còn lại hỗ trợ quản lý và cải tiến thực chất.",
        "tip": "Common mistake → documentation as the goal.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-031",
        "q": "What is the purpose of Sprint Planning?",
        "code": "",
        "o": [
            "Plan why, what, and how for the Sprint",
            "Approve annual budgets",
            "Conduct a final audit",
            "Replace the Product Backlog"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Sprint Planning làm rõ lý do Sprint có giá trị, công việc sẽ làm và cách thực hiện. Nó không thay thế Product Backlog.",
        "tip": "Sprint Planning → why, what, how.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-032",
        "q": "What is the purpose of the Sprint Review?",
        "code": "",
        "o": [
            "Inspect the outcome and adapt the Product Backlog",
            "Evaluate employee salaries",
            "Assign blame for defects",
            "Approve timesheets"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Sprint Review kiểm tra kết quả Sprint với các bên liên quan và xác định điều chỉnh tiếp theo, gồm điều chỉnh Product Backlog.",
        "tip": "Sprint Review → inspect outcome + adapt backlog.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-033",
        "q": "What is the Scrum commitment for the Product Backlog?",
        "code": "",
        "o": [
            "Definition of Done",
            "Sprint Goal",
            "Product Goal",
            "Release Plan"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Cam kết gắn với Product Backlog là Product Goal. Sprint Goal gắn với Sprint Backlog; Definition of Done gắn với Increment.",
        "tip": "Product Backlog → Product Goal.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-034",
        "q": "What is the Scrum commitment for the Increment?",
        "code": "",
        "o": [
            "Product Goal",
            "Sprint Goal",
            "Definition of Done",
            "Velocity"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Definition of Done là cam kết về trạng thái chất lượng cần đạt để công việc trở thành một phần của Increment.",
        "tip": "Increment → Definition of Done.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-035",
        "q": "What happens to work that does not meet the Definition of Done?",
        "code": "",
        "o": [
            "It becomes part of the Increment",
            "It is not part of the Increment",
            "It is automatically released",
            "It counts as completed"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Công việc chưa đạt Definition of Done không được tính là một phần của Increment. Không được coi là hoàn thành chỉ vì đã hết Sprint.",
        "tip": "Not Done → not part of Increment.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-036",
        "q": "Who may cancel a Sprint?",
        "code": "",
        "o": [
            "Scrum Master",
            "Developers",
            "Product Owner",
            "Any stakeholder"
        ],
        "a": 2,
        "correctAnswers": [
            2
        ],
        "explanation": "Theo Scrum, chỉ Product Owner có quyền hủy Sprint. Việc hủy có thể xảy ra nếu Sprint Goal trở nên lỗi thời.",
        "tip": "Cancel a Sprint → Product Owner.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-037",
        "q": "Which statement about Scrum Teams is correct?",
        "code": "",
        "o": [
            "They must have separate testing subteams",
            "They are cross-functional and self-managing",
            "They require a project manager role",
            "They never interact with stakeholders"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Scrum Team có đầy đủ kỹ năng cần thiết để tạo giá trị và tự quản lý cách tổ chức công việc; không bắt buộc có nhóm kiểm thử tách riêng.",
        "tip": "Scrum Team → cross-functional + self-managing.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-038",
        "q": "What is an Increment?",
        "code": "",
        "o": [
            "A concrete step toward the Product Goal that meets the Definition of Done",
            "A list of unestimated ideas",
            "A project contract",
            "A meeting agenda"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Increment là bước tiến cụ thể hướng tới Product Goal và phải đạt Definition of Done. Một danh sách ý tưởng hay biên bản họp không đáp ứng điều này.",
        "tip": "Increment → concrete step + Product Goal + Done.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-039",
        "q": "Which Scrum event is designed for stakeholders to discuss product progress with the Scrum Team?",
        "code": "",
        "o": [
            "Daily Scrum",
            "Sprint Review",
            "Sprint Retrospective",
            "Sprint Planning"
        ],
        "a": 1,
        "correctAnswers": [
            1
        ],
        "explanation": "Sprint Review là dịp Scrum Team và các bên liên quan cùng xem kết quả, thảo luận tiến độ sản phẩm và bước tiếp theo. Daily Scrum tập trung vào Developers.",
        "tip": "Stakeholders + product progress → Sprint Review.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    },
    {
        "id": "se433cis-040",
        "q": "When does a new Sprint start?",
        "code": "",
        "o": [
            "Immediately after the previous Sprint concludes",
            "Only after a quarterly approval",
            "After a two-week break",
            "Whenever the Scrum Master chooses"
        ],
        "a": 0,
        "correctAnswers": [
            0
        ],
        "explanation": "Sprint mới bắt đầu ngay sau khi Sprint trước kết thúc, tạo nhịp phát triển liên tục; không có khoảng nghỉ hai tuần bắt buộc.",
        "tip": "New Sprint → immediately after previous Sprint.",
        "sourceNote": "Đáp án theo phương án in đậm trong tài liệu Word bạn cung cấp."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
