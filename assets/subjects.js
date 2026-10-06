document.querySelectorAll('.subject-tab').forEach(link => {
    link.addEventListener('click', event => {
        // Opening another browser tab leaves the current exam running.
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        if (link.getAttribute('aria-current') === 'page') {
            event.preventDefault();
            return;
        }
        if (typeof isExamMode !== 'undefined' && isExamMode &&
            !confirm('Bạn đang thi thử. Chuyển môn sẽ kết thúc bài chưa nộp. Bạn vẫn muốn chuyển?')) {
            event.preventDefault();
        }
    });
});
