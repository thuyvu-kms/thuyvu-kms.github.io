# Vu Thi Thuy — Engineering Manager profile

Landing page cá nhân, HTML/CSS/JS thuần, không cần build. Song ngữ EN/VI, tự động dark mode.

## Cấu trúc
| File | Nội dung |
|---|---|
| `index.html` | Toàn bộ nội dung tiếng Anh + SEO/Open Graph |
| `i18n.js` | Bản dịch tiếng Việt (theo key `data-i18n`) + nút EN/VI |
| `styles.css` | Màu sắc (biến trên `:root`), layout, dark mode |
| `assets/` | `og-image.png` (ảnh preview khi chia sẻ link), `Vu_Thi_Thuy_CV.pdf`, ảnh chân dung |
| `tools/og-image.html` | Nguồn để tạo lại `og-image.png` |

## Xem thử trên máy
```bash
python3 -m http.server 8765 --directory .
```
Mở http://127.0.0.1:8765 . Thêm `?lang=vi` để mở thẳng bản tiếng Việt.

## Sửa nội dung
- Sửa câu tiếng Anh trong `index.html`, rồi sửa câu tiếng Việt có cùng key trong `i18n.js`.
- Thêm số liệu kết quả (vd. % regression được tự động hoá): thêm 1 `<li>` trong `.stat-grid` của `index.html` với `data-i18n="stat.xxx"` và thêm key `"stat.xxx"` trong `i18n.js`.

## Đổi ảnh chân dung
Thay file `assets/photo.jpg` (ảnh vuông, nên ≥ 800×800px để nét trên màn hình retina), rồi tạo lại ảnh preview bên dưới.

## Tạo lại ảnh preview (og-image)
Khi đang chạy server local:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=4000 --screenshot="$PWD/assets/og-image.png" http://127.0.0.1:8765/tools/og-image.html
```

## Deploy lên GitHub Pages
Link trang: **https://thuyvu-kms.github.io**

1. Trên GitHub (tài khoản `thuyvu-kms`) tạo repo **public** tên chính xác `thuyvu-kms.github.io`, không tick thêm README/.gitignore/license.
2. Trong thư mục này (đã `git init` và commit sẵn):
   ```bash
   git remote add origin https://github.com/thuyvu-kms/thuyvu-kms.github.io.git
   git push -u origin main
   ```
   Khi được hỏi mật khẩu, dùng **Personal Access Token** (GitHub → Settings → Developer settings → Tokens), không phải mật khẩu đăng nhập.
3. Repo → **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save. Sau 1–2 phút trang chạy ở link trên.
4. Cập nhật về sau: sửa file → `git add . && git commit -m "..." && git push`.
5. (Tuỳ chọn) Domain riêng: tạo file `CNAME` chứa tên miền, sửa các URL `thuyvu-kms.github.io` trong `index.html`, và trỏ DNS theo hướng dẫn của GitHub Pages.
