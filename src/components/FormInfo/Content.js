import './../../assets/css/FormInfo.css'

const Content = () => {
    const ratings = {};

    const selectRating = (element, questionId, rating) => {
        // Lưu rating vào object
        ratings[questionId] = rating;

        // Xóa chọn các ô tròn khác
        const circles = element.parentElement.parentElement.querySelectorAll('.circle');
        circles.forEach(circle => circle.classList.remove('selected'));
        element.classList.add('selected');
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn gửi form mặc định
        console.log('Survey Results:', ratings);
        alert('Thank you for your feedback!');
        // Xử lý gửi dữ liệu ở đây (ví dụ: gửi đến server)
    };

    return (
        <div className="survey-container">
            <form onSubmit={handleSubmit}>
                <table className="table survey-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="title">Very Bad</th>
                            <th className="title">Bad</th>
                            <th className="title">Neutral</th>
                            <th className="title">Good</th>
                            <th className="title">Excellent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 4 }, (_, index) => (
                            <tr key={`question-${index + 1}`}>
                                <td className="text_title">Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                {[1, 2, 3, 4, 5].map(rating => (
                                    <td key={rating}>
                                        <div className="circle" onClick={(e) => selectRating(e.currentTarget, `q${index + 1}`, rating)}></div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
            <div className="line"></div>
        </div>
    );
};

export default Content;