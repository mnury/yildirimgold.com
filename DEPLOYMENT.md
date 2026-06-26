# Yayına Alma Rehberi

Bu proje statik HTML/CSS/JS olduğu için Node.js veya build sistemi gerektirmez. Canlıya almak için klasörün içindeki dosyaları bir statik hosting servisine yüklemek yeterlidir.

## Önerilen Yol: Netlify

1. Netlify hesabı açın veya giriş yapın.
2. Add new site / Deploy manually akışını seçin.
3. `/home/mehmet/workspace/yildirimgold.com` klasörünü ZIP yapıp yükleyin ya da klasörü sürükleyip bırakın.
4. Site yayına alındığında geçici bir `*.netlify.app` adresi oluşur.
5. Site settings > Domain management bölümünden `yildirimgold.com` ve `www.yildirimgold.com` alan adlarını ekleyin.
6. Domain firmanızın DNS panelinde Netlify’ın istediği kayıtları girin. Genelde `www` için CNAME, kök domain için Netlify DNS veya A/ALIAS yönlendirmesi gerekir.
7. DNS yayıldıktan sonra HTTPS sertifikası otomatik oluşur.

## Alternatif: Cloudflare Pages

1. Cloudflare hesabına `yildirimgold.com` alan adını ekleyin.
2. Workers & Pages bölümünden Pages projesi oluşturun.
3. Upload assets / static files seçeneğiyle proje dosyalarını yükleyin.
4. Custom domains bölümünden `yildirimgold.com` ve `www.yildirimgold.com` ekleyin.
5. Cloudflare DNS kayıtlarını önerdiği şekilde oluşturun.

## Yayından Önce Kontrol Listesi

- Telefon numarası teyit edilecek: 0412 611 66 06
- Adres teyit edilecek: Fevzi Çakmak Mahallesi, Milli Egemenlik Caddesi No:19, Ergani / Diyarbakır
- Çalışma saatleri teyit edilecek: Pazartesi - Cuma, 08:00 - 18:00
- WhatsApp numarası varsa eklenecek
- Gerçek mağaza ve ürün fotoğraflarıyla stok görseller değiştirilecek
- Altın fiyatlarının nasıl güncelleneceğine karar verilecek

## Lokal Önizleme

Node.js gerekmez. Python varsa şu komutla lokal sunucu açılabilir:

```bash
cd /home/mehmet/workspace/yildirimgold.com
python3 -m http.server 8080
```

Sonra tarayıcıdan `http://localhost:8080` adresini açın.
