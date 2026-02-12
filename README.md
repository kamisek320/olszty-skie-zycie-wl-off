# 🏙️ Olsztyńskie wl-off - Strona FiveM Server

## 📍 Gdzie Są Twoje Pliki?

```
C:\Users\kamil\OneDrive\olsztyńskie zycie strona\
```

---

## 📂 Struktura Folderu

```
olsztyńskie zycie strona/
├── 📄 index.html                 ← OTWÓRZ TEN PLIK W PRZEGLĄDARCE!
├── 📄 README.md                  (Ten plik)
├── 📁 src/
│   ├── 📁 css/
│   │   ├── style.css            (Główne style)
│   │   └── fractions.css        (Style dla frakcji)
│   ├── 📁 js/
│   │   └── script.js            (Animacje)
│   ├── 📁 pages/
│   │   ├── ems.html             (EMS - Pogotowie)
│   │   ├── police.html          (Police - Policja)
│   │   ├── strazmiejska.html    (Straż Miejska)
│   │   ├── strazpozarna.html    (Straż Pożarna)
│   │   ├── mechanic.html        (Mechanic - Mechanicy)
│   │   ├── uwucafe.html         (UwuCafe)
│   │   ├── burgershot.html      (Burger Shot)
│   │   └── mafia.html           (Mafia)
│   └── 📁 images/               (Folder na zdjęcia)
```

---

## 🚀 Jak Uruchomić Stronę

### ✅ Metoda 1 (Najprostsza)
1. Otwórz folder: `C:\Users\kamil\OneDrive\olsztyńskie zycie strona\`
2. Kliknij PPM (prawy przycisk) na **`index.html`**
3. Wybierz: **"Otwórz za pomocą"** → **Chrome/Firefox/Edge**
4. Gotowe! ✨

### ✅ Metoda 2 (Edytor kodu)
1. Otwórz folder w **VS Code**
2. Kliknij na `index.html`
3. Użyj: **Alt+L** lub **Live Server** (rozszerzenie)

---

## ⚙️ WAŻNE - Zmiana Linków Discord

### 🔗 Jak Zmienić Linki do Discord:

**Dla każdej frakcji** wykonaj kroki:

1. Otwórz plik (np. `src/pages/ems.html`) w **Notatniku**
2. Użyj **Ctrl+F** i szukaj: `value=""`
3. Zmień na: `value="https://discord.gg/TWÓJ_INVITE_CODE"`
4. Zapisz (**Ctrl+S**)

### 📝 Pliki do Zmiany:

- ✅ `src/pages/ems.html`
- ✅ `src/pages/police.html`
- ✅ `src/pages/strazmiejska.html`
- ✅ `src/pages/strazpozarna.html`
- ✅ `src/pages/mechanic.html`
- ✅ `src/pages/uwucafe.html`
- ✅ `src/pages/burgershot.html`
- ✅ `src/pages/mafia.html`

> ⚠️ **WAŻNE**: Zmień wszystkie 8 linków!

---

## 🎨 Dostosowywanie Wyglądu

### Zmiana Kolorów

Otwórz plik: `src/css/style.css`

Na górze (linie 1-8) znajdziesz:

```css
:root {
    --primary-color: #ff6b35;      /* Pomarańczowy - zmień tutaj */
    --secondary-color: #004e89;    /* Niebieski - zmień tutaj */
    --dark-bg: #0d0d0d;            /* Czarne tło */
    --light-text: #ffffff;         /* Biały tekst */
}
```

Zmień wartości HEX na inne kolory!

### Zmiana Tekstu

Otwórz `index.html` w Notatniku, znajdź tekst do zmiany i edytuj.

---

## 📱 Responsywność

Strona działa na:
- 💻 **Desktop** (1200px+)
- 📱 **Tablet** (768px - 1024px)
- 📱 **Mobile** (poniżej 768px)

---

## ✨ Cechy Strony

✅ Nowoczesny design  
✅ Animacje i efekty hover  
✅ Smooth scroll nawigacja  
✅ 8 stron frakcji  
✅ Responsywna  
✅ Szybkie ładowanie  
✅ Profesjonalny wygląd  

---

## 🌐 Wrzucenie na Internet (Opcjonalnie)

Jeśli chcesz opublikować stronę online:

1. **Netlify** (netlify.com) - Najprostsze
2. **GitHub Pages** - Darmowe
3. **Vercel** (vercel.com) - Szybkie
4. **Zwykły hosting** (home.pl, steki.net, itp.)

---

## ❓ FAQ

**P: Strona nie ładuje się?**  
O: Sprawdź czy masz zainstalowaną przeglądarkę. Spróbuj F5 (przeładuj).

**P: Linki Discord nie działają?**  
O: Sprawdź czy kod zaproszenia jest prawidłowy i czy Discord serwer jest publiczny.

**P: Jak dodać swoje logo?**  
O: Umieść obrazek w `src/images/` i dodaj w HTML: `<img src="src/images/logo.png">`

**P: Czy mogę zmienić kolory?**  
O: Tak! Edytuj `src/css/style.css` (zmienne CSS na górze).

---

## 📞 Podsumowanie

✔️ Strona jest **GOTOWA do użytku**  
✔️ Wszystkie pliki są w folderze OneDrive  
✔️ Otwórz `index.html` w przeglądarce  
✔️ **Zmień linki Discord** (bardzo ważne!)  
✔️ Ciesz się! 🎮

---

**Powodzenia na serwerze FiveM!** 🏙️  
Stworzona: 11 Lutego 2026
