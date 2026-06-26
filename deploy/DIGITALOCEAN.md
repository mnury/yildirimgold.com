# DigitalOcean Droplet Üzerinden Yayına Alma

Bu proje mevcut droplet üzerinde yayınlanabilir. Droplet IP adresi: `209.38.221.196`.

## 1. DNS Kayıtları

Domain panelinde şu kayıtları oluşturun:

- `@` için A kaydı: `209.38.221.196`
- `www` için A kaydı: `209.38.221.196`

DNS yayıldıktan sonra şu komutla kontrol edilebilir:

```bash
dig +short yildirimgold.com
dig +short www.yildirimgold.com
```

## 2. Nginx ve Certbot Kurulumu

Sunucuda `sudo` parola istediği için bu komutları SSH terminalinde çalıştırın:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

## 3. Site Dosyalarını Yayın Dizinine Kopyalama

```bash
sudo mkdir -p /var/www/yildirimgold.com
sudo rsync -av --delete --exclude deploy /home/mehmet/workspace/yildirimgold.com/ /var/www/yildirimgold.com/
sudo chown -R www-data:www-data /var/www/yildirimgold.com
```

## 4. Nginx Site Konfigürasyonu

```bash
sudo cp /home/mehmet/workspace/yildirimgold.com/deploy/nginx-yildirimgold.com.conf /etc/nginx/sites-available/yildirimgold.com
sudo ln -s /etc/nginx/sites-available/yildirimgold.com /etc/nginx/sites-enabled/yildirimgold.com
sudo nginx -t
sudo systemctl reload nginx
```

## 5. HTTPS Sertifikası

DNS kayıtları droplet IP adresine döndükten sonra:

```bash
sudo certbot --nginx -d yildirimgold.com -d www.yildirimgold.com
```

Certbot e-posta, kullanım şartları ve HTTP -> HTTPS yönlendirmesi soracaktır. Yönlendirmeyi açmak önerilir.

## 6. Güncelleme Akışı

Site dosyalarında değişiklik yaptıktan sonra tekrar kopyalamak yeterli:

```bash
sudo rsync -av --delete --exclude deploy /home/mehmet/workspace/yildirimgold.com/ /var/www/yildirimgold.com/
sudo systemctl reload nginx
```
