class Roadmap {
    constructor() {
        this.stages = document.querySelectorAll('.stage');
        this.projects = document.querySelectorAll('.project-card');
        this.modal = document.getElementById('projectModal');
        this.progressFill = document.querySelector('.progress-fill');
        this.init();
    }

    init() {
        this.initStages();
        this.initProjects();
        this.initModal();
        this.initProgressTracking();
        this.initKeyboardNavigation();
        this.initAnimations();
    }

    initStages() {
        this.stages.forEach((stage, index) => {
            const header = stage.querySelector('.stage-header');
            const toggle = stage.querySelector('.stage-toggle');
            
            [header, toggle].forEach(element => {
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleStage(stage);
                });
            });

            this.observeStage(stage, index);
        });

    }

    initProjects() {
        this.projects.forEach(project => {
            const header = project.querySelector('.project-header');
            const toggle = project.querySelector('.project-toggle');
            
            header.addEventListener('click', (e) => {
                if (!e.target.closest('.project-toggle')) {
                    this.openProjectModal(project);
                }
            });

            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleProject(project);
            });
        });
    }

    initModal() {
        if (!this.modal) return;
        
        const closeBtn = this.modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.closeModal());

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    toggleStage(stage) {
        if (stage.classList.contains('active')) {
            this.closeStage(stage);
        } else {
            this.closeAllStages();
            this.openStage(stage);
        }
    }

    openStage(stage, scroll = true) {
        stage.classList.add('active');
        
        const content = stage.querySelector('.stage-details');
        if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        
        this.updateProgress();
        
        if (scroll) {
            this.scrollToStage(stage);
        }
    }

    closeStage(stage) {
        stage.classList.remove('active');
        const content = stage.querySelector('.stage-details');
        if (content) {
            content.style.maxHeight = '0';
        }
    }

    closeAllStages() {
        this.stages.forEach(stage => {
            this.closeStage(stage);
        });
    }

    toggleProject(project) {
        project.classList.toggle('active');
        
        const details = project.querySelector('.project-details');
        const toggle = project.querySelector('.project-toggle svg');
        
        if (project.classList.contains('active')) {
            details.style.maxHeight = details.scrollHeight + 'px';
            toggle.style.transform = 'rotate(180deg)';
        } else {
            details.style.maxHeight = '0';
            toggle.style.transform = 'rotate(0deg)';
        }
    }

    openProjectModal(project) {
        if (!this.modal) return;
        
        const title = project.querySelector('h4').textContent;
        const description = project.querySelector('.project-description').innerHTML;
        
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML = description;
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        if (!this.modal) return;
        
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    observeStage(stage, index) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Добавляем анимацию только один раз
                    if (!entry.target.hasAttribute('data-animated')) {
                        entry.target.style.animation = `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`;
                        entry.target.setAttribute('data-animated', 'true');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(stage);
    }

    updateProgress() {
        if (!this.progressFill) return;
        
        const activeStages = document.querySelectorAll('.stage.active').length;
        const totalStages = this.stages.length;
        const progress = (activeStages / totalStages) * 100;
        
        this.progressFill.style.width = `${progress}%`;
    }

    scrollToStage(stage) {
        const stageTop = stage.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100;
        
        window.scrollTo({
            top: stageTop - offset,
            behavior: 'smooth'
        });
    }

    initProgressTracking() {
        const viewedStages = new Set();
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stageNumber = entry.target.getAttribute('data-stage');
                    viewedStages.add(stageNumber);
                    
                    const progress = (viewedStages.size / this.stages.length) * 100;
                    if (this.progressFill) {
                        this.progressFill.style.width = `${Math.max(25, progress)}%`;
                    }
                }
            });
        }, { threshold: 0.5 });

        this.stages.forEach(stage => observer.observe(stage));
    }

    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateToNextStage();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateToPrevStage();
            } else if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    navigateToNextStage() {
        const activeStage = document.querySelector('.stage.active');
        const nextStage = activeStage ? activeStage.nextElementSibling : this.stages[0];
        
        if (nextStage && nextStage.classList.contains('stage')) {
            this.closeAllStages();
            this.openStage(nextStage);
        }
    }

    navigateToPrevStage() {
        const activeStage = document.querySelector('.stage.active');
        const prevStage = activeStage ? activeStage.previousElementSibling : this.stages[this.stages.length - 1];
        
        if (prevStage && prevStage.classList.contains('stage')) {
            this.closeAllStages();
            this.openStage(prevStage);
        }
    }

    initAnimations() {
        // Плавное появление всей страницы
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            document.body.style.opacity = '1';
        }, 100);

        // Параллакс эффект для хедера
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Public API для внешней навигации
    goToStage(stageNumber) {
        const targetStage = document.querySelector(`.stage[data-stage="${stageNumber}"]`);
        if (targetStage) {
            this.closeAllStages();
            this.openStage(targetStage);
        }
    }

    goToProject(projectNumber) {
        const targetProject = document.querySelector(`.project-card[data-project="${projectNumber}"]`);
        if (targetProject) {
            this.openProjectModal(targetProject);
        }
    }
}

// Инициализация когда DOM готов
document.addEventListener('DOMContentLoaded', () => {
    const roadmap = new Roadmap();

    // Обработчик клика вне блоков для закрытия (опционально)
    document.addEventListener('click', (e) => {
        // Если клик не по заголовку этапа и не по переключателю
        if (!e.target.closest('.stage-header') && 
            !e.target.closest('.stage-toggle') &&
            !e.target.closest('.project-header') &&
            !e.target.closest('.project-toggle')) {
            // roadmap.closeAllStages(); // Раскомментируйте если хотите закрывать этапы при клике вне
        }
    });

    // Поддержка жестов для мобильных (опционально)
    let touchStartY = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                roadmap.navigateToNextStage();
            } else {
                roadmap.navigateToPrevStage();
            }
        }
    });

    // Service Worker для PWA (опционально)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // navigator.serviceWorker.register('/sw.js');
        });
    }
});

// Глобальные функции для навигации извне
function navigateToStage(stageNumber) {
    const roadmap = new Roadmap();
    roadmap.goToStage(stageNumber);
}

function navigateToProject(projectNumber) {
    const roadmap = new Roadmap();
    roadmap.goToProject(projectNumber);
}