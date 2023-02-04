function repainting(input) {
    let nylon = 1.50;
    let qntyNylon = (input[0]);
    let totalNylon = (qntyNylon + 2) * nylon;
    let paint = 14.50;
    let qntyPaint = (input[1]);
    let extraPaint = qntyPaint * 0.10;               
    let totalPaint = (qntyPaint + extraPaint) * paint;
    let paintDiluent = 5;
    let qntypaintDiluent = Number(input[2]);
    let totalpaintDiluent = paintDiluent * qntypaintDiluent;
    let hoursforWork = (input[3]);
    let bag = 0.40;
    let total = totalNylon + totalPaint + totalpaintDiluent + bag;
    let priceForWork = (0.30*total) * hoursforWork;
    let totalPainting = total + priceForWork;
    console.log(totalPainting);
}
repainting([10,11,4,8])