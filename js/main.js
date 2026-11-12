// ==========================================
// GALACTIC NEWS NETWORK
// Главный JavaScript-файл
// ==========================================


// ---------- 1. ДАТА ----------

const dateElement = document.getElementById("current-date");

if (dateElement) {
    dateElement.textContent = new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


// ---------- 2. СОХРАНЕНИЕ ПРОГРЕССА ----------

let raccoonClicks = Number(localStorage.getItem("raccoonClicks")) || 0;

let raccoonSecretFound =
    localStorage.getItem("raccoonSecretFound") === "true";

let visits = Number(localStorage.getItem("visits")) || 0;

visits++;
localStorage.setItem("visits", visits);


// ---------- 3. ОБЫЧНЫЕ НОВОСТИ ----------

const news = [
    {
        category: "РЕСПУБЛИКА",
        title: "Палпатин снова призвал к стабильности",
        description: "В ходе очередного обращения канцлер заявил, что Республика находится под полным контролем. Сенаторы встретили заявление продолжительными аплодисментами.",
        fullText: `
            <p>В ходе очередного обращения к Сенату канцлер Палпатин заявил, что Республика находится под полным контролем, а ситуация в галактике постепенно стабилизируется.</p>

            <p>По словам канцлера, все возникающие проблемы находятся под пристальным вниманием правительства. Сенаторы встретили заявление продолжительными аплодисментами.</p>

            <p>Представители оппозиции пока никак не прокомментировали выступление.</p>
        `
    },
    {
        category: "ОРДЕН ДЖЕДАЕВ",
        title: "Падаван случайно получил звание мастера",
        description: "В Храме джедаев произошла техническая ошибка. Совет пока не решил, оставлять ли новое звание.",
        fullText: `
            <p>В Храме джедаев произошёл необычный инцидент: один из падаванов неожиданно получил звание мастера.</p>

            <p>Предполагается, что причиной стала ошибка в системе учёта. Совет джедаев пока не принял окончательного решения о том, следует ли отменять присвоенное звание.</p>

            <p>Сам падаван от комментариев отказался, заявив, что теперь у него слишком много обязанностей.</p>
        `
    },
    {
        category: "НАУКА",
        title: "Учёные обнаружили новую планету",
        description: "Объект получил предварительное название «Нигде-7». Подробности исследования пока не раскрываются.",
        fullText: `
            <p>Группа галактических астрономов сообщила об обнаружении ранее неизвестной планеты.</p>

            <p>Объект получил предварительное название «Нигде-7». Сейчас специалисты изучают его атмосферу и пытаются определить точное расположение.</p>

            <p>Дополнительная информация будет опубликована после завершения исследования.</p>
        `
    },
    {
        category: "ПРОИСШЕСТВИЯ",
        title: "Световой меч найден в столовой",
        description: "Неизвестный оставил работающий световой меч рядом с автоматом для напитков. Владельца пока не нашли.",
        fullText: `
            <p>Сотрудники одной из столовых Корусанта обнаружили работающий световой меч рядом с автоматом для напитков.</p>

            <p>На место прибыли представители службы безопасности. Владельца оружия установить пока не удалось.</p>

            <p>Посетителей просят не трогать неизвестные предметы, особенно если они излучают яркий свет.</p>
        `
    },
    {
        category: "ЭКОНОМИКА",
        title: "На Татуине резко подорожала вода",
        description: "Местные жители жалуются на рост цен. Представители торговых организаций называют ситуацию абсолютно нормальной.",
        fullText: `
            <p>На Татуине зафиксирован очередной рост цен на питьевую воду.</p>

            <p>Местные жители выражают недовольство, однако представители торговых организаций утверждают, что изменения связаны с рыночной ситуацией.</p>

            <p>Правительство планеты пока не объявило о планах вмешиваться в ситуацию.</p>
        `
    },
    {
        category: "ПОЛИТИКА",
        title: "Сенат перенёс заседание в шестой раз",
        description: "Причиной переноса стало отсутствие кворума. Несколько сенаторов утверждают, что просто перепутали время.",
        fullText: `
            <p>Очередное заседание Галактического Сената вновь не состоялось.</p>

            <p>Официальной причиной стало отсутствие необходимого количества участников. Некоторые сенаторы заявили, что перепутали время проведения заседания.</p>

            <p>Новая дата пока не определена.</p>
        `
    },
    {
        category: "ТРАНСПОРТ",
        title: "На Корусанте снова образовалась пробка",
        description: "Тысячи спидеров остановились из-за одного неисправного дроида. Ремонтные службы обещают разобраться.",
        fullText: `
            <p>На одной из главных транспортных магистралей Корусанта образовалась масштабная пробка.</p>

            <p>По предварительным данным, причиной стал неисправный дроид, остановившийся прямо посреди дороги.</p>

            <p>Ремонтные службы уже направлены на место происшествия.</p>
        `
    },
    {
        category: "ОБРАЗОВАНИЕ",
        title: "В Академии джедаев отменили контрольную",
        description: "По официальной версии, преподаватель забыл подготовить задания. Падаваны уже назвали это величайшим событием года.",
        fullText: `
            <p>В Академии джедаев неожиданно отменили запланированную контрольную работу.</p>

            <p>Преподаватель объяснил произошедшее тем, что забыл подготовить задания.</p>

            <p>Среди падаванов новость вызвала необычайный энтузиазм.</p>
        `
    },
    {
        category: "КОСМОС",
        title: "Астрономы зафиксировали странный сигнал",
        description: "Сигнал был обнаружен в отдалённом секторе галактики. Источник пока не установлен.",
        fullText: `
            <p>Галактические астрономы сообщили о регистрации необычного сигнала в одном из отдалённых секторов.</p>

            <p>Его источник пока не установлен. Специалисты продолжают анализ полученных данных.</p>

            <p>Дополнительная информация ожидается позднее.</p>
        `
    },
    {
        category: "БЕЗОПАСНОСТЬ",
        title: "Служба безопасности проверяет архивы Сената",
        description: "Проверка связана с обнаружением нескольких документов, не имеющих официального происхождения.",
        fullText: `
            <p>Служба безопасности Республики начала внеплановую проверку архивов Сената.</p>

            <p>Поводом стало обнаружение нескольких документов, происхождение которых пока не удалось установить.</p>

            <p>Представители ведомства обещают предоставить подробности после завершения проверки.</p>
        `
    }
];


// ---------- 4. ПЕРВАЯ НОВОСТЬ ПРО ЕНОТА ----------

const raccoonNews = {
    category: "РЕСПУБЛИКА",
    title: "Подозрительный енот замечен возле здания Сената",
    description: "Неизвестное животное было замечено возле главного входа. Представители службы безопасности отказались от комментариев.",

    fullText: `
        <p>Сегодня утром возле главного входа в здание Галактического Сената был замечен неизвестный <span class="secret-word">енот</span>.</p>

        <p>По словам очевидцев, животное некоторое время находилось возле входа, после чего беспрепятственно покинуло территорию.</p>

        <p>Представители службы безопасности отказались комментировать произошедшее. Камеры наблюдения, которые могли бы зафиксировать инцидент, по неизвестной причине не сохранили запись.</p>

        <p>На данный момент происхождение животного и причины его появления остаются неизвестными.</p>

        <p>Республика продолжает следить за ситуацией.</p>
    `
};


// ---------- 5. ПЕРЕМЕШИВАНИЕ НОВОСТЕЙ ----------

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}


// ---------- 6. ОТОБРАЖЕНИЕ НОВОСТЕЙ ----------

function showNews() {
    const newsContainer = document.getElementById("news-container");

    if (!newsContainer) return;

    newsContainer.innerHTML = "";

    // Выбираем три обычные новости
    const selectedNews = shuffleArray(news).slice(0, 3);

    // Добавляем новость про енота с вероятностью 65%
    if (Math.random() < 0.65) {
        selectedNews.push(raccoonNews);
    }

    // Перемешиваем новости
    const finalNews = shuffleArray(selectedNews);

    finalNews.forEach(item => {
        const article = document.createElement("article");

        article.className = "news-card";

        article.innerHTML = `
            <div class="news-category">${item.category}</div>
            <h3 class="news-title">${item.title}</h3>
            <p class="news-description">${item.description}</p>
        `;

        // Открываем полную новость при нажатии
        article.addEventListener("click", () => {
            openArticle(item);
        });

        newsContainer.appendChild(article);
    });
}


// ---------- 7. ОТДЕЛЬНАЯ СТРАНИЦА НОВОСТИ ----------

function openArticle(item) {
    // Если страница новости уже открыта, не создаём вторую
    if (document.querySelector(".article-overlay")) return;

    const overlay = document.createElement("div");

    overlay.className = "article-overlay";

    overlay.innerHTML = `
        <div class="article-page">

            <button class="article-back">
                ← Назад к новостям
            </button>

            <div class="article-category">
                ${item.category}
            </div>

            <h1 class="article-title">
                ${item.title}
            </h1>

            <div class="article-description">
                ${item.description}
            </div>

            <div class="article-divider"></div>

            <div class="article-full-text">
                ${item.fullText}
            </div>

            <div class="article-footer">
                GALACTIC NEWS NETWORK
            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    // Кнопка возврата
    overlay.querySelector(".article-back").addEventListener("click", () => {
        overlay.remove();
    });

    // Если это новость про енота, добавляем пасхалку
    const secretWord = overlay.querySelector(".secret-word");

    if (secretWord) {
        secretWord.addEventListener("click", handleRaccoonClick);
    }
}


// ---------- 8. ПАСХАЛКА С ЕНОТОМ ----------

function handleRaccoonClick(event) {
    event.stopPropagation();

    raccoonClicks++;

    // Сохраняем количество нажатий
    localStorage.setItem("raccoonClicks", raccoonClicks);

    // Каждые пять нажатий открываем секрет
    if (raccoonClicks >= 5) {
        raccoonClicks = 0;

        localStorage.setItem("raccoonClicks", 0);

        raccoonSecretFound = true;

        localStorage.setItem("raccoonSecretFound", "true");

        openRaccoonSecret();
    }
}


// ---------- 9. СТИЛИ СЕКРЕТНОГО ДОКУМЕНТА ----------

const secretStyles = document.createElement("style");

secretStyles.textContent = `
    .secret-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.88);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10001;
        padding: 20px;
        animation: secretFadeIn 0.3s ease;
    }

    .secret-window {
        width: 100%;
        max-width: 600px;
        max-height: 90vh;
        overflow-y: auto;
        background: #101a2b;
        border: 1px solid #b83232;
        border-radius: 10px;
        padding: 30px;
        color: #dce6f5;
        box-shadow: 0 0 35px rgba(180, 35, 35, 0.25);
    }

    .secret-label {
        color: #e05252;
        font-size: 12px;
        letter-spacing: 3px;
        margin-bottom: 20px;
    }

    .secret-window h2 {
        color: #ffffff;
        margin-bottom: 20px;
    }

    .secret-window p {
        line-height: 1.7;
        margin-bottom: 14px;
    }

    .secret-warning {
        color: #e05252;
        font-weight: bold;
        margin-top: 20px;
    }

    .secret-close {
        margin-top: 25px;
        padding: 10px 20px;
        background: #263b59;
        color: white;
        border: 1px solid #49678e;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    }

    .secret-close:hover {
        background: #354f75;
    }

    .secret-link {
        color: #e05252;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .secret-link:hover {
        color: #ff8585;
    }

    @keyframes secretFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

document.head.appendChild(secretStyles);



 // ---------- 10. СЕКРЕТНЫЙ ДОКУМЕНТ R-001 ----------

function openRaccoonSecret() {
    if (document.querySelector(".secret-overlay")) return;

    const overlay = document.createElement("div");

    overlay.className = "secret-overlay";

    overlay.innerHTML = `
        <div class="secret-window">

            <div class="secret-label">
                REPUBLIC INTELLIGENCE SERVICE
            </div>

            <h2>Засекреченный архив</h2>

            <p><strong>Дело:</strong> R-001</p>
            <p><strong>Объект:</strong> неизвестное животное (предположительно енот)</p>
            <p><strong>Уровень угрозы:</strong> не установлен</p>
            <p><strong>Статус:</strong> наблюдение продолжается</p>

            <hr style="border-color: #35445b; margin: 20px 0;">

            <p>
                Объект неоднократно замечен на территории Сената.
                Системы безопасности не фиксируют его проникновения.
            </p>

            <p>
                По неизвестной причине все записи с камер наблюдения
                за соответствующие периоды оказываются повреждены.
            </p>

            <p class="secret-warning">
                ПРИМЕЧАНИЕ: НЕ ПЫТАЙТЕСЬ УСТАНОВИТЬ КОНТАКТ С ОБЪЕКТОМ.
            </p>

            <hr style="border-color: #35445b; margin: 20px 0;">

            <p style="color: #7d91ad; font-size: 12px;">
                В архиве обнаружена дополнительная запись.
                Уровень доступа недостаточен.
            </p>

            <p>
                <span class="secret-link" id="open-r002">
                    [ОТКРЫТЬ ДОПОЛНИТЕЛЬНУЮ ЗАПИСЬ]
                </span>
            </p>

            <button class="secret-close">
                Закрыть документ
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".secret-close").addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });

    // Переход к следующему секрету
    overlay.querySelector("#open-r002").addEventListener("click", () => {
        overlay.remove();
        openProtocolSecret();
    });
}


// ---------- 10.1. СЕКРЕТНЫЙ ДОКУМЕНТ R-002 ----------

function openProtocolSecret() {
    if (!raccoonSecretFound) return;

    if (document.querySelector(".secret-overlay")) return;

    // Сохраняем обнаружение второго секрета
    localStorage.setItem("protocolSecretFound", "true");

    const overlay = document.createElement("div");

    overlay.className = "secret-overlay";

    overlay.innerHTML = `
        <div class="secret-window">

            <div class="secret-label">
                REPUBLIC INTELLIGENCE SERVICE
                <br>
                RESTRICTED ACCESS
            </div>

            <h2>Служебная запись</h2>

            <p><strong>Дело:</strong> R-002</p>
            <p><strong>Тип:</strong> внутренний протокол</p>
            <p><strong>Автор:</strong> не установлен</p>
            <p><strong>Дата:</strong> 7 ноября 2026 года</p>

            <p>
                Последнее изменение записи было произведено
                7 ноября 2026 года в 23:48.
            </p>

            <hr style="border-color: #35445b; margin: 20px 0;">

            <p>
                Первоначальное расследование объекта R-001
                было прекращено по распоряжению вышестоящего руководства.
            </p>

            <p>
                Все материалы переданы в закрытый архив.
                Доступ к ним был предоставлен только одному сотруднику.
            </p>

            <p>
                Имя сотрудника отсутствует в официальном реестре
                служащих Республики.
            </p>

            <p class="secret-warning">
                ВНИМАНИЕ: ДАННАЯ ЗАПИСЬ НЕ ДОЛЖНА БЫЛА ПОПАСТЬ
                В ОБЩИЙ АРХИВ.
            </p>

            <hr style="border-color: #35445b; margin: 20px 0;">

            <p style="color: #7d91ad; font-size: 12px;">
                Последняя строка документа:
            </p>

            <p>
                «Проверить историю изменений главной информационной сети.
                Особое внимание уделить учётной записи создателя».
            </p>

            <button class="secret-close">
                Закрыть документ
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".secret-close").addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
}



 // ---------- 10.2. СЕКРЕТНЫЙ ДОКУМЕНТ R-003 ----------

function openNetworkLogSecret() {
    if (document.querySelector(".secret-overlay")) return;

    const overlay = document.createElement("div");

    overlay.className = "secret-overlay";

    overlay.innerHTML = `
        <div class="secret-window">

            <div class="secret-label">
                GALACTIC NETWORK
                <br>
                SYSTEM AUDIT
            </div>

            <h2>История изменений системы</h2>

            <p><strong>Дело:</strong> R-003</p>
            <p><strong>Дата события:</strong> 8 ноября 2026 года</p>
            <p><strong>Время:</strong> 00:03</p>
            <p><strong>Тип события:</strong> изменение прав доступа</p>

            <hr style="border-color: #35445b; margin: 20px 0;">

            <p>
                Система зарегистрировала изменение параметров
                учётной записи одного из администраторов сети.
            </p>

            <p>
                Предыдущий уровень доступа:
                <strong>REPUBLIC STANDARD</strong>.
            </p>

            <p>
                Новый уровень доступа:
                <strong style="color: #e05252;">RESTRICTED / UNKNOWN</strong>.
            </p>

            <p>
                Изменение было произведено вручную.
                Запрос на подтверждение отсутствует.
            </p>

            <p class="secret-warning">
                ВНИМАНИЕ: ИМЯ ПОЛЬЗОВАТЕЛЯ НЕ УДАЛОСЬ ВОССТАНОВИТЬ.
            </p>

            <hr style="border-color: #35445b; margin: 20px 0;">

            <p style="color: #7d91ad; font-size: 12px;">
                Системная пометка:
            </p>

            <p>
                «Изменение вступило в силу. Возврат к предыдущим
                параметрам не предусмотрен».
            </p>

            <button class="secret-close">
                Закрыть документ
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".secret-close").addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });

    localStorage.setItem("networkSecretFound", "true");
}




// ---------- 11. СЛУЧАЙНЫЕ СОБЫТИЯ ----------

const events = [
    {
        title: "Сбой гипердвигателя",
        description: "Несколько кораблей временно потеряли возможность совершать гиперпрыжки."
    },
    {
        title: "Заседание Совета джедаев",
        description: "Совет собрался для обсуждения крайне важного вопроса. Подробности засекречены."
    },
    {
        title: "Неизвестный сигнал",
        description: "На окраине галактики был зафиксирован странный сигнал."
    },
    {
        title: "Технические неполадки",
        description: "Некоторые информационные системы Республики работают нестабильно."
    },
    {
        title: "Проверка архивов",
        description: "Сотрудники службы безопасности проводят внеплановую проверку документов."
    }
];


function showRandomEvent() {
    const eventPanel = document.getElementById("event-panel");

    if (!eventPanel) return;

    const randomIndex = Math.floor(Math.random() * events.length);

    const randomEvent = events[randomIndex];

    eventPanel.innerHTML = `
        <h3>${randomEvent.title}</h3>
        <p>${randomEvent.description}</p>
    `;
}


// ---------- СЕКРЕТНОЕ ВЗАИМОДЕЙСТВИЕ С ЛОГОТИПОМ ----------

const logo = document.querySelector(".logo");

if (logo) {
    logo.addEventListener("click", () => {

        // Секрет доступен только после обнаружения R-002
        if (localStorage.getItem("protocolSecretFound") !== "true") {
            return;
        }

        let clicks = Number(localStorage.getItem("networkClicks")) || 0;

        clicks++;

        localStorage.setItem("networkClicks", clicks);

        if (clicks >= 8) {
            localStorage.setItem("networkClicks", 0);
            openNetworkLogSecret();
        }
    });
}



// ---------- 12. ИМПЕРСКИЙ РЕЖИМ ----------

function applyEmpireMode() {
    if (localStorage.getItem("empireMode") !== "true") {
        return;
    }

    document.body.classList.add("empire-mode");

    document.title = "Imperial News Network";

    // Шапка
    const logoTitle = document.querySelector(".logo h1");
    const logoSubtitle = document.querySelector(".logo p");
    const headerStatus = document.querySelector(".header-status");

    if (logoTitle) {
        logoTitle.textContent = "IMPERIAL NEWS";
    }

    if (logoSubtitle) {
        logoSubtitle.textContent = "IMPERIAL INFORMATION NETWORK";
    }

    if (headerStatus) {
        headerStatus.innerHTML = `
            <span class="status-dot"></span>
            EMPIRE NETWORK ONLINE
        `;
    }

    // Навигация
    const sithButton = document.querySelector(".sith-nav-button");

    if (sithButton) {
        sithButton.innerHTML = "<span>☾</span> Путь Империи";
    }

    // Приветствие
    const welcomeLabel = document.querySelector(".welcome .section-label");
    const welcomeTitle = document.querySelector(".welcome h2");
    const welcomeDescription = document.querySelector(".welcome-description");

    if (welcomeLabel) {
        welcomeLabel.textContent = "OFFICIAL IMPERIAL BROADCAST";
    }

    if (welcomeTitle) {
        welcomeTitle.textContent = "Новая эра Галактики";
    }

    if (welcomeDescription) {
        welcomeDescription.textContent =
            "Галактика вступила в новую эпоху. Имперская сеть продолжает вещание. Порядок будет восстановлен.";
    }

    // Главная новость
    const mainNewsLabel = document.querySelector(".main-news-content .section-label");
    const mainNewsTitle = document.querySelector(".main-news-content h2");
    const mainNewsParagraphs = document.querySelectorAll(
        ".main-news-content > p:not(.section-label)"
    );

    if (mainNewsLabel) {
        mainNewsLabel.textContent = "ОФИЦИАЛЬНОЕ СООБЩЕНИЕ";
    }

    if (mainNewsTitle) {
        mainNewsTitle.textContent = "Галактическая Республика прекратила своё существование";
    }

    if (mainNewsParagraphs[0]) {
        mainNewsParagraphs[0].textContent =
            "Информационная сеть перешла под контроль Галактической Империи. Все административные изменения вступили в силу.";
    }

    if (mainNewsParagraphs[1]) {
        mainNewsParagraphs[1].textContent =
            "Гражданам рекомендуется сохранять спокойствие и соблюдать новый порядок.";
    }

    // Лента новостей
    const liveLabel = document.querySelector(".live-label");

    if (liveLabel) {
        liveLabel.textContent = "● IMPERIAL LIVE FEED";
    }

    // События
    const eventPanel = document.querySelector("#event-panel");

    if (eventPanel) {
        eventPanel.innerHTML = `
            <div class="event-icon">◈</div>
            <div>
                <h3>Передача управления завершена</h3>
                <p>
                    Имперская информационная сеть работает штатно.
                    Все системы под новым контролем.
                </p>
            </div>
        `;
    }

    // Подвал
    const footerLogo = document.querySelector(".footer-logo");
    const footerParagraphs = document.querySelectorAll(".footer > p");
    const footerBottom = document.querySelector(".footer-bottom");

    if (footerLogo) {
        footerLogo.textContent = "IMPERIAL NEWS NETWORK";
    }

    if (footerParagraphs[0]) {
        footerParagraphs[0].textContent =
            "Официальный информационный ресурс Галактической Империи.";
    }

    if (footerParagraphs[1]) {
        footerParagraphs[1].textContent = "LONG LIVE THE EMPIRE.";
    }

    if (footerBottom) {
        footerBottom.textContent = "© 2026 IMPERIAL INFORMATION NETWORK";
    }
}


// ---------- 13. ЗАПУСК ----------

showNews();
showRandomEvent();
applyEmpireMode();
