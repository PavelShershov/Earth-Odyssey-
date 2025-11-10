class Notifications {
    constructor() {
        this.notification = document.getElementById('notification');
        this.timeoutId = null;
    }

    showNotification(message) {
        // Очищаем предыдущий таймер, если он есть
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        
        // Устанавливаем текст и показываем уведомление
        this.notification.textContent = message;
        this.notification.style.display = 'block';
        
        // Автоматически скрываем через 10 секунд
        this.timeoutId = setTimeout(() => {
            this.hideNotification();
        }, 7000);
    }

    hideNotification() {
        this.notification.style.display = 'none';
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}

// Добавляем обработчик клика для скрытия уведомления
document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.addEventListener('click', function() {
            // Создаем экземпляр Notifications и скрываем уведомление
            const notifications = new Notifications();
            notifications.hideNotification();
        });
    }
});