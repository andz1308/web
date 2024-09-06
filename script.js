function calculate() {
    // Lấy giá trị của các hệ số từ form
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Tính toán delta (discriminant)
    const delta = b * b - 4 * a * c;

    // Xử lý kết quả
    let resultText = '';
    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultText = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultText = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        resultText = 'Phương trình vô nghiệm.';
    }

    // Hiển thị kết quả
    document.getElementById('result').innerText = resultText;
}
