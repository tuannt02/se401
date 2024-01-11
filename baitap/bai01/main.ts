export enum DanhHieu {
  NamTot = "NamTot",
  XuatSac = "XuatSac",
  CongHien = "CongHien",
}

export enum LoaiHoNgheo {
  HoNgheo = "HoNgheo",
  HoCanNgheo = "HoCanNgheo",
}

export interface SinhVien {
  hoTen: string;
  maSoSinhVien: number;
  soTinChi: number;
  donGia: number;
}

export interface HocPhi {
  tinhTienChuaMienGiam(): number;
  tinhTienPhaiDong(): number;
}

export class HocPhiSinhVienCNTT implements HocPhi {
  private mSinhVien: SinhVien;
  constructor(sinhVien: SinhVien) {
    this.mSinhVien = sinhVien;
  }

  public tinhTienChuaMienGiam(): number {
    return this.mSinhVien.soTinChi * this.mSinhVien.donGia;
  }

  public tinhTienPhaiDong(): number {
    return this.tinhTienChuaMienGiam();
  }
}

export abstract class HocPhiDecorator implements HocPhi {
  protected mHocPhi: HocPhi;

  constructor(hocPhi: HocPhi) {
    this.mHocPhi = hocPhi;
  }

  public abstract tinhTienChuaMienGiam(): number;

  public abstract tinhTienPhaiDong(): number;
}

class HocPhiDanhHieuDecorator extends HocPhiDecorator {
  private mDanhHieu: DanhHieu;

  constructor(hocPhi: HocPhi, danhHieu: DanhHieu) {
    super(hocPhi);
    this.mDanhHieu = danhHieu;
  }

  public tinhTienChuaMienGiam(): number {
    return this.mHocPhi.tinhTienChuaMienGiam();
  }

  public tinhTienPhaiDong(): number {
    if (this.mDanhHieu === DanhHieu.NamTot) {
      return this.mHocPhi.tinhTienPhaiDong() * 0.85;
    }
    if (this.mDanhHieu === DanhHieu.XuatSac) {
      return this.mHocPhi.tinhTienPhaiDong() * 0.9;
    }
    if (this.mDanhHieu === DanhHieu.CongHien) {
      return this.mHocPhi.tinhTienPhaiDong() * 0.92;
    }

    throw new Error("Danh hieu khong hop le");
  }
}

class HocPhiHoNgheoDecorator extends HocPhiDecorator {
  private mLoaiHoNgheo: LoaiHoNgheo;

  constructor(hocPhi: HocPhi, loaiHoNgheo: LoaiHoNgheo) {
    super(hocPhi);
    this.mLoaiHoNgheo = loaiHoNgheo;
  }

  public tinhTienChuaMienGiam(): number {
    return this.mHocPhi.tinhTienChuaMienGiam();
  }

  public tinhTienPhaiDong(): number {
    if (this.mLoaiHoNgheo === LoaiHoNgheo.HoNgheo) {
      return this.mHocPhi.tinhTienPhaiDong() * 0.2;
    }
    if (this.mLoaiHoNgheo === LoaiHoNgheo.HoCanNgheo) {
      return this.mHocPhi.tinhTienPhaiDong() * 0.5;
    }

    throw new Error("Loai ho ngheo khong hop le");
  }
}

// Run source
const sinhVienCNTT: SinhVien = {
  hoTen: "Nguyen Thai Tuan",
  maSoSinhVien: 20522122,
  soTinChi: 14,
  donGia: 1000000,
};

// Print Thong tien sinh vien CNTT
console.log("Thong tin sinh vien CNTT: ", sinhVienCNTT);

const hocPhiSinhVienCNTT = new HocPhiSinhVienCNTT(sinhVienCNTT);
console.log("Hoc phi sinh vien CNTT: ", hocPhiSinhVienCNTT.tinhTienPhaiDong());

// Add HocPhiDanhHieuDecorator DanhHieu.XuatSac
const hocPhiSinhVienCNTTCoDanhHieuXuatSac = new HocPhiDanhHieuDecorator(
  hocPhiSinhVienCNTT,
  DanhHieu.XuatSac
);
console.log(
  "Hoc phi sinh vien CNTT co danh hieu Xuat Sac: ",
  hocPhiSinhVienCNTTCoDanhHieuXuatSac.tinhTienPhaiDong()
);

// Add HocPhiDanHieuDecorator DanhHieu.NamTot
const hocPhiSinhVienCNTTCoDanhHieuNamTot = new HocPhiDanhHieuDecorator(
  hocPhiSinhVienCNTT,
  DanhHieu.NamTot
);
console.log(
  "Hoc phi sinh vien CNTT co danh hieu Nam Tot: ",
  hocPhiSinhVienCNTTCoDanhHieuNamTot.tinhTienPhaiDong()
);

// Add HocPhiHoNgheoDecorator LoaiHoNgheo.HoNgheo
const hocPhiSinhVienCNTTCoLoaiHoNgheo = new HocPhiHoNgheoDecorator(
  hocPhiSinhVienCNTT,
  LoaiHoNgheo.HoNgheo
);
console.log(
  "Hoc phi sinh vien CNTT co loai ho ngheo Ho Ngheo: ",
  hocPhiSinhVienCNTTCoLoaiHoNgheo.tinhTienPhaiDong()
);

// Add HocPhiHoNgheoDecorator & HocPhiDanhHieuDecorator
const hocPhiSinhVienCNTTCoLoaiHoNgheoVaDanhHieu = new HocPhiHoNgheoDecorator(
  hocPhiSinhVienCNTTCoDanhHieuXuatSac,
  LoaiHoNgheo.HoNgheo
);
console.log(
  "Hoc phi sinh vien CNTT co loai ho ngheo Ho Ngheo va danh hieu Xuat Sac: ",
  hocPhiSinhVienCNTTCoLoaiHoNgheoVaDanhHieu.tinhTienPhaiDong()
);