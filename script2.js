<script>
        function startGame() {
            // Lấy giá trị ngẫu nhiên từ 0 đến 1
            const randomValue = Math.floor(Math.random() * 2);
            let guess;

            do {
                // Yêu cầu người dùng nhập giá trị
                guess = prompt("Nhập một số (0 hoặc 1):");

                // Kiểm tra nếu đầu vào không phải là số hợp lệ
                if (isNaN(guess) || (guess != 0 && guess != 1)) {
                    alert("Vui lòng nhập 0 hoặc 1.");
                } else {
                    guess = Number(guess);
                }
            } while (guess !== randomValue);

            // Hiển thị thông báo đoán đúng
            alert("Chúc mừng! Bạn đã đoán đúng.");
        }
    </script>
