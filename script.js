class Roadmap {
    constructor() {
        this.stages = document.querySelectorAll('.stage');
        this.projects = document.querySelectorAll('.project-card');
        this.modal = document.getElementById('projectModal');
        this.progressFill = document.querySelector('.progress-fill');
        this.touchStartY = 0;
        this.isScrolling = false;
        this.init();
    }

    init() {
        this.initStages();
        this.initProjects();
        this.initModal();
        this.initProgressTracking();
        this.initKeyboardNavigation();
        this.initAnimations();
        this.initTouchHandlers();
    }

    initStages() {
        this.stages.forEach((stage, index) => {
            const header = stage.querySelector('.stage-header');
            const toggle = stage.querySelector('.stage-toggle');
            
            [header, toggle].forEach(element => {
                element.addEventListener('click', (e) => {
                    // Предотвращаем срабатывание при скролле
                    if (this.isScrolling) return;
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
            
            // Используем click для десктопа и touchstart для мобильных
            const handleProjectClick = (e) => {
                if (this.isScrolling) return;
                if (!e.target.closest('.project-toggle')) {
                    e.preventDefault();
                    this.openProjectModal(project);
                }
            };

            header.addEventListener('click', handleProjectClick);
            header.addEventListener('touchstart', handleProjectClick, { passive: false });

            toggle.addEventListener('click', (e) => {
                if (this.isScrolling) return;
                e.stopPropagation();
                e.preventDefault();
                this.toggleProject(project);
            });

            toggle.addEventListener('touchstart', (e) => {
                if (this.isScrolling) return;
                e.stopPropagation();
                e.preventDefault();
                this.toggleProject(project);
            }, { passive: false });
        });
    }

    initModal() {
        if (!this.modal) return;
        
        const closeBtn = this.modal.querySelector('.modal-close');
        
        const closeModalHandler = () => this.closeModal();
        
        closeBtn.addEventListener('click', closeModalHandler);
        closeBtn.addEventListener('touchstart', closeModalHandler, { passive: true });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        this.modal.addEventListener('touchstart', (e) => {
            if (e.target === this.modal) {
                e.preventDefault();
                this.closeModal();
            }
        }, { passive: false });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    initTouchHandlers() {
        let touchStartY = 0;
        let scrollTimer;

        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            this.isScrolling = false;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            this.isScrolling = true;
            // Сбрасываем таймер при скролле
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                this.isScrolling = false;
            }, 100);
        }, { passive: true });

        document.addEventListener('touchend', () => {
            // Даем небольшой таймаут после скролла перед разрешением кликов
            setTimeout(() => {
                this.isScrolling = false;
            }, 150);
        }, { passive: true });
    }

    // Остальные методы остаются без изменений до initAnimations...

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
        
        // Добавляем обработчик для закрытия по клику на overlay
        const overlayClickHandler = (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        };
        
        this.modal.addEventListener('click', overlayClickHandler);
        this.modal.addEventListener('touchstart', overlayClickHandler, { passive: true });
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
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            document.body.style.opacity = '1';
        }, 100);

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

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

// Упрощенная инициализация - УДАЛИТЕ старые обработчики жестов
document.addEventListener('DOMContentLoaded', () => {
    new Roadmap();
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