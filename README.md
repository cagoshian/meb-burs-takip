# meb-burs-takip
MEB bursunu takip eden ve burs yattığında telefona bildirim gönderen yazılım.

## Kurulum

#### İlk olarak, w3a değişkenine, e-devlet'in w3a çerezini yazın.

> Çerezler için, tarayıcınızda e-devlet'e giriş yaptıktan Ctrl+Shift+I ile geliştirici araçlarını açıp, Ağ sekmesine gidin. Ardından, e-devlet üzerinde "PTT Üzerinden Yapılan Kurum Ödemeleri Sorgulama ve Hesaba Aktarma" hizmetine girin. Ardından, Ağ sekmesinde görünen istekteki w3a çerezini kopyalayıp değişkene yapıştırın.

#### Sonrasında, telefonunuza bildirim göndermesi için pushbullet_api_key değişkenine Pushbullet API anahtarınızı girmeniz gerekiyor. Eğer telefonunuza bildirim gelmesini istemiyorsanız, değişkeni boş bırakın.

> Pushbullet API anahtarı için, Pushbullet'in sitesine girip hesap açın. Ardından hesap ayarlarında, Create Access Token butonuyla bir API anahtarı oluşturun. Bu anahtarı kopyalayıp değişkene yapıştırın. Bildirimi almak için telefonunuzda Pushbullet uygulamasının yüklü olması ve hesaba giriş yapılmış olması gerekmektedir.


Gerekli değerleri girdikten sonra, kodu çalıştırdığınızda yazılım dakikada bir burs durumunu kontrol edecektir, değişiklik durumunda konsola mesaj yazacak ve telefonunuza bildirim gönderecektir.
