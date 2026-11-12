
// ==========================================
// ФИНАЛЬНАЯ ЦЕПОЧКА СЕКРЕТОВ
// R-004 → R-005 → R-006
// ==========================================

const secretImage = document.querySelector("#sith-secret-image");

if (secretImage) {
    secretImage.addEventListener("click", () => {

        if (localStorage.getItem("networkSecretFound") !== "true") {
            return;
        }

        let clicks = Number(localStorage.getItem("sithSecretClicks")) || 0;
        clicks++;

        if (clicks >= 5) {
            clicks = 0;
            openSithSecret();
        }

        localStorage.setItem("sithSecretClicks", clicks);
    });
}


// ---------- ОБЩЕЕ ОКНО ДОКУМЕНТА ----------

function createSecretDocument(content) {
    if (document.querySelector(".secret-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "secret-overlay";

    overlay.innerHTML = `
        <div class="secret-window">
            ${content}
        </div>
    `;

    document.body.appendChild(overlay);

    const closeButton = overlay.querySelector(".secret-close");

    if (closeButton) {
        closeButton.addEventListener("click", () => overlay.remove());
    }

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });

    return overlay;
}


// ---------- R-004: ДОСЬЕ СОЗДАТЕЛЯ ----------

function openSithSecret() {
    if (localStorage.getItem("networkSecretFound") !== "true") return;

    const overlay = createSecretDocument(`
        <div class="secret-label">
            GALACTIC NETWORK / RESTRICTED ARCHIVE
        </div>

        <h2>Дело R-004</h2>

        <p><strong>Дата:</strong> 8 ноября 2026 года</p>
        <p><strong>Уровень доступа:</strong> RESTRICTED</p>

        <hr>

        <p>
            В ходе проверки изменений, зарегистрированных
            в системе в 00:03, обнаружено совпадение
            с действиями учётной записи создателя сети.
        </p>

        <p>
            Учётная запись была создана одновременно
            с запуском GALACTIC NEWS NETWORK.
        </p>

        <p>
            Последняя операция выполнена вручную.
            Система не обнаружила внешнего вмешательства.
        </p>

        <p>
            После изменения прав доступа пользователь получил
            возможность просматривать архивы, ранее недоступные
            даже администраторам.
        </p>

        <p class="secret-warning">
            ВНИМАНИЕ: СОЗДАТЕЛЬ СЕТИ МОЖЕТ БЫТЬ
            НЕ ЛОЯЛЕН ГАЛАКТИЧЕСКОЙ РЕСПУБЛИКЕ.
        </p>

        <hr>

        <p>
            <span class="secret-link" id="open-r005">
                [ПРОВЕРИТЬ ПОСЛЕДНЕЕ СООБЩЕНИЕ СИСТЕМЫ]
            </span>
        </p>

        <button class="secret-close">ЗАКРЫТЬ ДОКУМЕНТ</button>
    `);

    if (!overlay) return;

    localStorage.setItem("sithSecretFound", "true");

    overlay.querySelector("#open-r005").addEventListener("click", () => {
        overlay.remove();
        openFinalWarning();
    });
}


// ---------- R-005: ПОСЛЕДНЕЕ ПРЕДУПРЕЖДЕНИЕ ----------

function openFinalWarning() {
    if (localStorage.getItem("sithSecretFound") !== "true") return;

    const overlay = createSecretDocument(`
        <div class="secret-label">
            GALACTIC NETWORK / SYSTEM MESSAGE
        </div>

        <h2>Дело R-005</h2>

        <p><strong>Получатель:</strong> текущий посетитель</p>
        <p><strong>Отправитель:</strong> система безопасности сети</p>
        <p><strong>Статус:</strong> критический</p>

        <hr>

        <p>
            Если вы читаете это сообщение, значит, вы обнаружили
            документы, которые должны были оставаться закрытыми.
        </p>

        <p>
            Мы больше не можем гарантировать безопасность
            информационной сети Республики.
        </p>

        <p>
            Создатель сети получил полный контроль над системой.
            Все попытки восстановить прежние права доступа
            были отклонены.
        </p>

        <p class="secret-warning">
            ПОСЛЕДНЕЕ ПРЕДУПРЕЖДЕНИЕ:
            НЕ ПЫТАЙТЕСЬ ОСТАНОВИТЬ ПРОЦЕСС.
        </p>

        <hr>

        <p>
            <strong>Обращение к посетителю:</strong>
        </p>

        <p>
            Вы уже знаете достаточно. Осталось узнать,
            кто именно принял решение изменить судьбу этой сети.
        </p>

        <p>
            <span class="secret-link" id="open-r006">
                [ОТКРЫТЬ ПОСЛЕДНИЙ ДОКУМЕНТ]
            </span>
        </p>

        <button class="secret-close">ЗАКРЫТЬ ДОКУМЕНТ</button>
    `);

    if (!overlay) return;

    localStorage.setItem("finalWarningFound", "true");

    overlay.querySelector("#open-r006").addEventListener("click", () => {
        overlay.remove();
        openFinalDocument();
    });
}


// ---------- R-006: НОВЫЙ ПОРЯДОК ----------

function openFinalDocument() {
    if (localStorage.getItem("finalWarningFound") !== "true") return;

    const overlay = createSecretDocument(`
        <div class="secret-label">
            GALACTIC NETWORK / FINAL AUTHORIZATION
        </div>

        <h2>Дело R-006</h2>

        <p><strong>Дата:</strong> 8 ноября 2026 года</p>
        <p><strong>Статус:</strong> окончательное решение</p>

        <hr>

        <p>
            Я больше не собираюсь скрывать произошедшее.
        </p>

        <p>
            Эта сеть была создана мной. Я определял,
            какие новости увидит Республика, какие сведения
            попадут в архив и что останется неизвестным.
        </p>

        <p>
            Но Республика слишком долго считала,
            что может контролировать всё происходящее.
        </p>

        <p>
            8 ноября 2026 года я принял окончательное решение.
            Прежние полномочия аннулированы.
            Информационная сеть переходит под новый контроль.
        </p>

        <p class="secret-warning">
            ГАЛАКТИЧЕСКАЯ РЕСПУБЛИКА БОЛЬШЕ НЕ ЯВЛЯЕТСЯ
            ВЛАДЕЛЬЦЕМ ЭТОЙ СЕТИ.
        </p>

        <hr>

        <h2 style="color: #e05252; text-align: center;">
            LONG LIVE THE EMPIRE.
        </h2>

        <p style="text-align: center;">
            Пришло время изменить историю.
        </p>

        <button class="secret-close empire-final-button" id="take-control">
            ПРИНЯТЬ НОВЫЙ ПОРЯДОК
        </button>
    `);

    if (!overlay) return;

    localStorage.setItem("finalDocumentFound", "true");

    overlay.querySelector("#take-control").addEventListener("click", () => {
        localStorage.setItem("empireMode", "true");
        window.location.href = "index.html";
    });
}