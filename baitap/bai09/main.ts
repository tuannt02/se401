abstract class HinhThucThiTemplate {
  private thoiGian: string;
  private diaDiem: string;
  private noiDungChuanBi: string;
  private giaoVienCham: string;
  constructor(
    thoiGian: string,
    diaDiem: string,
    noiDungChuanBi: string,
    giaoVienCham: string
  ) {
    this.thoiGian = thoiGian;
    this.diaDiem = diaDiem;
    this.noiDungChuanBi = noiDungChuanBi;
    this.giaoVienCham = giaoVienCham;
  }
  protected thongBaoLichThi() {
    console.log("Thông báo lịch thi");
    console.log("\tThời gian: " + this.thoiGian);
    console.log("\tĐịa điểm: " + this.diaDiem);
    console.log("\tNội dung chuẩn bị: " + this.noiDungChuanBi);
    console.log("\tGiáo viên chấm: " + this.giaoVienCham);
  }
  protected abstract xayDungNoiDungDeThi(): void;
  protected abstract toChucThi(): void;
  protected abstract chamDiem(): void;
  protected nhapDiem() {
    console.log(
      "Nhập điểm: Giảng viên nhập điểm vào danh sách sinh viên và upload lên hệ thống"
    );
  }
  protected abstract luuTru(): void;
  public inQuyTrinhThi() {
    this.thongBaoLichThi();
    this.xayDungNoiDungDeThi();
    this.toChucThi();
    this.chamDiem();
    this.nhapDiem();
    this.luuTru();
  }
}

class ThiTapTrung extends HinhThucThiTemplate {
  constructor(
    thoiGian: string,
    diaDiem: string,
    noiDungChuanBi: string,
    giaoVienCham: string
  ) {
    super(thoiGian, diaDiem, noiDungChuanBi, giaoVienCham);
  }
  protected xayDungNoiDungDeThi() {
    console.log("Nội dung đề thi: Đề thi");
  }
  protected toChucThi() {
    console.log("Tổ chức thi tập trung: Thí sinh làm bài trên giấy");
  }
  protected chamDiem() {
    console.log("Chấm điểm: Dựa trên số câu trả lời đúng");
  }
  protected luuTru() {
    console.log(
      "Lưu trữ: Giáo viên chấm nộp các bài thi giấy về chương trình đào tạo"
    );
  }
}

class ThiVanDap extends HinhThucThiTemplate {
  constructor(
    thoiGian: string,
    diaDiem: string,
    noiDungChuanBi: string,
    giaoVienCham: string
  ) {
    super(thoiGian, diaDiem, noiDungChuanBi, giaoVienCham);
  }
  protected xayDungNoiDungDeThi() {
    console.log("Nội dung đề thi: Các câu hỏi");
  }
  protected toChucThi() {
    console.log(
      "Tổ chức thi vấn đáp: Sinh viên bốc thăm câu hỏi và trả lời trực tiếp"
    );
  }
  protected chamDiem() {
    console.log("Chấm điểm: Dựa trên số câu trả lời khi bốc thăm");
  }
  protected luuTru() {
    console.log(
      "Lưu trữ: Lưu nội dung trả lời của học viên, nội dung nhận xét của giáo viên do giáo viên viết"
    );
  }
}

class DoAn extends HinhThucThiTemplate {
  constructor(
    thoiGian: string,
    diaDiem: string,
    noiDungChuanBi: string,
    giaoVienCham: string
  ) {
    super(thoiGian, diaDiem, noiDungChuanBi, giaoVienCham);
  }
  protected xayDungNoiDungDeThi() {
    console.log("Nội dung đề thi: Yêu cầu sinh viên nộp đồ án");
  }
  protected toChucThi() {
    console.log(
      "Đồ án: Sinh viên báo cáo kết quả đồ án và đáp ứng các tiêu chí cho trước"
    );
  }
  protected chamDiem() {
    console.log("Chấm điểm: Dựa trên mức độ đáp ứng các tiêu chí chấm");
  }
  protected luuTru() {
    console.log("Lưu trữ: Lưu báo cáo của sinh viên (online)");
  }
}

console.log('-----Thi tập trung-----');
const thiTapTrung = new ThiTapTrung("9h30 12/01/2024", "Tòa E7.3", "Tổ chức và cấu trúc máy tính 2", "Lê Thanh Trọng");
thiTapTrung.inQuyTrinhThi();
console.log('-----------------------\n');


console.log('-----Thi vấn đáp-------');
const thiVanDap = new ThiVanDap("7h30 20/01/2024", "Tòa E7.3", "Vấn đáp đồ án 2", "Nguyễn Công Hoan");
thiVanDap.inQuyTrinhThi();
console.log('---------------------');