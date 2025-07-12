# 💅 Nail Website Project - README

## 📌 Mục tiêu

- Giới thiệu dịch vụ và sản phẩm liên quan đến nail.
- Cho phép người dùng tự thiết kế mẫu bộ móng:
  - Kéo thả icon, tô màu, thêm chữ.
  - In file ra hoặc đặt hàng trực tiếp trên web.
- Xây dựng hệ thống trưng bày và bán các mẫu nail có sẵn.

---

## 🚀 Tính năng chính

### 👩‍💻 Người dùng

- [ ] Landing page giới thiệu sản phẩm và dịch vụ
- [ ] Công cụ build mẫu nail:
  - [ ] Kéo thả thành phần lên móng
  - [ ] Tô màu từng móng
  - [ ] Thêm chữ tùy chỉnh
  - [ ] Xuất file (PDF, PNG)
  - [ ] Đặt hàng mẫu đã thiết kế
- [ ] Bộ sưu tập mẫu nail có sẵn
- [ ] Lưu mẫu cá nhân (sau khi đăng nhập)
- [ ] Chia sẻ mẫu qua link hoặc QR code
- [ ] Đặt lịch hẹn dịch vụ nail
- [ ] Đánh giá/review mẫu hoặc dịch vụ
- [ ] 🔥 **Gợi ý mẫu theo phong cách** (dựa theo dịp lễ, màu da, tâm trạng...)
- [ ] 🔍 **Bộ lọc và tìm kiếm nâng cao** (màu, độ dài móng, kiểu dáng...)
- [ ] 👗 **Ghép outfit với nail** (upload ảnh trang phục để được gợi ý mẫu phù hợp)

### 🛠️ Admin

- [ ] CRUD mẫu nail (thêm/sửa/xoá)
- [ ] Quản lý đơn hàng
- [ ] Quản lý người dùng
- [ ] Dashboard thống kê doanh thu
- [ ] (Tuỳ chọn) Quản lý đối tác tiệm nail
- [ ] Duyệt mẫu người dùng upload (nếu có)

---

## 🧱 Công nghệ sử dụng

| Thành phần          | Công nghệ                          | Ghi chú                           |
| ------------------- | ---------------------------------- | --------------------------------- |
| Frontend            | Nuxt 3 + TypeScript                | Hiện đại, hỗ trợ SSR & SPA        |
| UI Library          | TailwindCSS + NuxtUI               | Giao diện nhanh và dễ tùy biến    |
| Backend             | Nuxt server routes + MongoDB Atlas | Có thể thay bằng Strapi/Directus  |
| Database            | MongoDB Atlas                      | Quản lý mẫu, người dùng, đơn hàng |
| Storage ảnh         | Cloudinary / Vercel Blob Storage   | Tối ưu dung lượng & CDN           |
| Drawing Tool        | FabricJS / KonvaJS                 | Dùng để vẽ, tùy chỉnh mẫu móng    |
| Auth                | Supabase Auth / AuthJS             | Hệ thống đăng nhập hiện đại       |
| Payment             | Stripe / Paypal                    | Thanh toán online                 |
| Realtime (tuỳ chọn) | Pusher / Ably                      | Hỗ trợ update theo thời gian thực |

---

## 🧭 Định hướng phát triển

### Phase 1

- [ ] Landing page
- [ ] Build mẫu đơn giản
- [ ] Trưng bày mẫu có sẵn

### Phase 2

- [ ] Đặt lịch hẹn
- [ ] Tích hợp thanh toán
- [ ] Giao diện & tính năng admin

### Phase 3

- [ ] Marketplace mẫu nail (người dùng upload/bán)
- [ ] Chia sẻ mẫu, follow người tạo mẫu
- [ ] Gợi ý AI + gợi ý theo phong cách
- [ ] Kết nối thời trang và mẫu móng (outfit matching)

---

## 🎨 UX/UI cần lưu ý

- [ ] Mobile first
- [ ] Animation kéo thả mượt
- [ ] Hỗ trợ Light/Dark mode
- [ ] SEO tốt cho landing page
- [ ] Hỗ trợ PWA (Progressive Web App)

---

## ✅ Kết luận

Dự án có tiềm năng phát triển từ MVP đến nền tảng marketplace trong ngành nail.  
Bạn có thể khởi đầu nhỏ gọn, rồi từng bước hoàn thiện và mở rộng.
