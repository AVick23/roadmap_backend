// data.js — Backend Developer Roadmap 2026 (73 темы)
export const categories = [
    { id: 'intro', title: 'Введение в бэкенд', icon: 'public' },
    { id: 'frontend', title: 'Основы фронтенда', icon: 'palette' },
    { id: 'languages', title: 'Языки бэкенда', icon: 'code' },
    { id: 'vcs', title: 'Git и репозитории', icon: 'inventory_2' },
    { id: 'databases', title: 'Реляционные БД', icon: 'database' },
    { id: 'api', title: 'API и безопасность', icon: 'hub' },
    { id: 'caching', title: 'Кэширование', icon: 'bolt' },
    { id: 'servers', title: 'Веб-серверы', icon: 'dns' },
    { id: 'ai', title: 'AI в разработке', icon: 'psychology' },
    { id: 'testing', title: 'Тестирование', icon: 'science' },
    { id: 'cicd', title: 'CI/CD', icon: 'sync' },
    { id: 'dbadvanced', title: 'Продвинутые БД', icon: 'insights' },
    { id: 'advanced', title: 'Продвинутый бэкенд', icon: 'rocket_launch' },
    { id: 'ops', title: 'Операционные навыки', icon: 'settings' },
    { id: 'scaling', title: 'Масштабирование', icon: 'trending_up' }
];

export const topics = [
    // ═══ INTRO (6) ═══
    {
        id: 'internet-basics', category: 'intro', level: 'basic',
        title: 'Как работает интернет?', time: '10 мин',
        keywords: 'интернет сеть web http клиент сервер',
        desc: 'Основы работы интернета, сетевое взаимодействие, передача данных между клиентом и сервером, маршрутизация.',
        code: `Клиент → DNS → IP → Сервер\n\n1. Браузер запрашивает DNS\n2. DNS возвращает IP-адрес\n3. TCP-соединение (3-way handshake)\n4. HTTP-запрос/ответ\n5. Рендеринг страницы`,
        links: [
            { url: 'https://developer.mozilla.org/ru/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work', text: 'MDN', primary: true },
            { url: 'https://skyeng.ru/magazine/wiki/it-industriya/chto-takoe-inet/', text: 'Skyeng' }
        ]
    },
    {
        id: 'http-basics', category: 'intro', level: 'basic',
        title: 'Что такое HTTP?', time: '12 мин',
        keywords: 'http протокол запросы response methods status',
        desc: 'Протокол передачи гипертекста, HTTP-методы (GET, POST, PUT, DELETE), статус-коды, заголовки, тело запроса.',
        code: `HTTP Methods:\nGET     - получить ресурс\nPOST    - создать ресурс\nPUT     - обновить полностью\nPATCH   - обновить частично\nDELETE  - удалить\n\nStatus Codes:\n2xx - Success\n3xx - Redirect\n4xx - Client Error\n5xx - Server Error`,
        links: [
            { url: 'https://developer.mozilla.org/ru/docs/Web/HTTP', text: 'MDN HTTP', primary: true }
        ]
    },
    {
        id: 'domain-name', category: 'intro', level: 'basic',
        title: 'Что такое доменное имя?', time: '8 мин',
        keywords: 'домен domain dns tld регистрация',
        desc: 'Доменные имена, структура (TLD, 2LD, 3LD), регистрация, связь с IP-адресами.',
        code: `Домен: example.com\n\n┌──────────┐\n│  .com    │ ← TLD (Top-Level Domain)\n├──────────┤\n│ example  │ ← 2LD (Second-Level)\n└──────────┘\n\nsub.example.com\n└── 3LD (subdomain)`,
        links: [
            { url: 'https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/', text: 'Cloudflare', primary: true }
        ]
    },
    {
        id: 'hosting', category: 'intro', level: 'basic',
        title: 'Что такое хостинг?', time: '8 мин',
        keywords: 'хостинг hosting сервер vps облако',
        desc: 'Веб-хостинг, типы (Shared, VPS, Dedicated, Cloud), выбор провайдера для развёртывания.',
        code: `Типы хостинга:\n\n1. Shared    - дешёвый, ограниченный\n2. VPS       - виртуальный сервер\n3. Dedicated - физический сервер\n4. Cloud     - масштабируемый (AWS, GCP)\n5. PaaS      - платформа (Heroku, Vercel)`,
        links: [
            { url: 'https://www.digitalocean.com/community/tutorials/what-is-web-hosting', text: 'DigitalOcean', primary: true }
        ]
    },
    {
        id: 'dns', category: 'intro', level: 'basic',
        title: 'DNS и как он работает?', time: '10 мин',
        keywords: 'dns сервер доменов разрешение записи a mx cname',
        desc: 'Система доменных имён, процесс разрешения, типы записей (A, AAAA, MX, CNAME, TXT).',
        code: `DNS Records:\n\nA     → IPv4 адрес\nAAAA  → IPv6 адрес\nCNAME → алиас домена\nMX    → почтовый сервер\nTXT   → текстовые данные\nNS    → name server\n\ngoogle.com → 142.250.x.x`,
        links: [
            { url: 'https://result.school/roadmap/frontend/article/dns-and-how-it-works', text: 'Result School', primary: true },
            { url: 'https://proglib.io/p/dns-basic', text: 'Proglib' }
        ]
    },
    {
        id: 'browsers', category: 'intro', level: 'basic',
        title: 'Как работают браузеры?', time: '12 мин',
        keywords: 'браузер browser рендеринг движок html css',
        desc: 'Устройство браузеров, процесс рендеринга, движки (Blink, Gecko, WebKit), Critical Rendering Path.',
        code: `Рендеринг страницы:\n\n1. Parse HTML → DOM Tree\n2. Parse CSS  → CSSOM\n3. DOM + CSSOM = Render Tree\n4. Layout (positions)\n5. Paint (pixels)\n6. Composite (layers)\n\nEngines:\nChrome  → Blink\nFirefox → Gecko\nSafari  → WebKit`,
        links: [
            { url: 'https://developer.mozilla.org/en-US/docs/Glossary/Browser', text: 'MDN', primary: true }
        ]
    },

    // ═══ FRONTEND (3) ═══
    {
        id: 'html', category: 'frontend', level: 'basic',
        title: 'HTML', time: '8 мин',
        keywords: 'html разметка теги семантика accessibility',
        desc: 'Язык разметки, семантические теги, атрибуты, доступность, формы, мета-теги.',
        code: `<!DOCTYPE html>\n<html lang="ru">\n<head>\n  <meta charset="UTF-8">\n  <title>Page</title>\n</head>\n<body>\n  <header>...</header>\n  <main>...</main>\n  <footer>...</footer>\n</body>\n</html>`,
        links: [
            { url: 'https://developer.mozilla.org/ru/docs/Web/HTML', text: 'MDN HTML', primary: true }
        ]
    },
    {
        id: 'css', category: 'frontend', level: 'basic',
        title: 'CSS', time: '10 мин',
        keywords: 'css стили селекторы flexbox grid responsive',
        desc: 'Каскадные таблицы стилей, селекторы, Flexbox, Grid, медиа-запросы, переменные.',
        code: `/* Flexbox */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}`,
        links: [
            { url: 'https://developer.mozilla.org/ru/docs/Web/CSS', text: 'MDN CSS', primary: true }
        ]
    },
    {
        id: 'javascript', category: 'frontend', level: 'basic',
        title: 'JavaScript', time: '15 мин',
        keywords: 'javascript js dom events async promises',
        desc: 'Основы JS, DOM, события, асинхронность (Promises, async/await), ES6+.',
        code: `// Async/Await\nasync function fetchData() {\n  try {\n    const res = await fetch('/api');\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}`,
        links: [
            { url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript', text: 'MDN JS', primary: true }
        ]
    },

    // ═══ LANGUAGES (1) ═══
    {
        id: 'backend-language', category: 'languages', level: 'basic',
        title: 'Выбор бэкенд-языка', time: '15 мин',
        keywords: 'язык backend javascript python go java rust',
        desc: 'Обзор популярных бэкенд-языков: JavaScript/Node.js, Python, Go, Java, Rust, C#, PHP, Ruby.',
        code: `Популярность 2026:\n\n1. JavaScript/TypeScript - Web, API\n2. Python               - AI, Data, Web\n3. Go                   - Cloud, Microservices\n4. Java                 - Enterprise\n5. Rust                 - Performance, Systems\n6. C#                   - .NET Enterprise\n7. PHP                  - Web Legacy\n8. Ruby                 - Startups`,
        links: [
            { url: 'https://roadmap.sh/backend', text: 'Roadmap.sh 2026', primary: true },
            { url: 'https://survey.stackoverflow.co/2024/', text: 'Stack Overflow' }
        ]
    },

    // ═══ VCS (3) ═══
    {
        id: 'git', category: 'vcs', level: 'basic',
        title: 'Git', time: '12 мин',
        keywords: 'git контроль версий commit branch merge rebase',
        desc: 'Система контроля версий, команды (add, commit, push), ветвление, слияние, rebase.',
        code: `# Основные команды\ngit init\ngit clone <url>\ngit add .\ngit commit -m "message"\ngit push origin main\n\n# Ветвление\ngit branch feature\ngit checkout feature\ngit merge feature\ngit rebase main`,
        links: [
            { url: 'https://git-scm.com/book/ru/v2', text: 'Pro Git', primary: true },
            { url: 'https://githowto.com/ru', text: 'Git How To' }
        ]
    },
    {
        id: 'github', category: 'vcs', level: 'basic',
        title: 'GitHub', time: '10 мин',
        keywords: 'github репозиторий pull request fork issues actions',
        desc: 'Хостинг репозиториев, Pull Requests, Issues, GitHub Actions, Copilot.',
        code: `GitHub Flow:\n1. Create branch\n2. Make commits\n3. Open Pull Request\n4. Review & Discuss\n5. Merge to main\n6. Deploy\n\nGitHub Actions:\nname: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest`,
        links: [
            { url: 'https://docs.github.com/ru/get-started/start-your-journey', text: 'GitHub Docs', primary: true },
            { url: 'https://sky.pro/wiki/media/github-polnoe-rukovodstvo-na-russkom-yazyke/', text: 'Sky.pro' }
        ]
    },
    {
        id: 'gitlab', category: 'vcs', level: 'basic',
        title: 'GitLab', time: '10 мин',
        keywords: 'gitlab ci cd devops репозиторий pipeline',
        desc: 'Платформа DevOps, встроенный CI/CD, реестр контейнеров, управление проектами.',
        code: `# .gitlab-ci.yml\nstages:\n  - test\n  - build\n  - deploy\n\ntest:\n  stage: test\n  script:\n    - npm test\n\nbuild:\n  stage: build\n  script:\n    - docker build -t app .`,
        links: [
            { url: 'https://docs.gitlab.com/ee/README.html', text: 'GitLab Docs', primary: true }
        ]
    },

    // ═══ DATABASES (6) ═══
    {
        id: 'mysql', category: 'databases', level: 'basic',
        title: 'MySQL', time: '12 мин',
        keywords: 'mysql sql база данных query index',
        desc: 'Популярная реляционная СУБД, SQL-запросы, индексы, транзакции, оптимизация.',
        code: `-- Создание таблицы\nCREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100),\n  email VARCHAR(255) UNIQUE,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\n-- Запрос с JOIN\nSELECT u.name, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id;`,
        links: [
            { url: 'https://dev.mysql.com/doc/', text: 'MySQL Docs', primary: true },
            { url: 'https://www.opennet.ru/docs/RUS/sql/', text: 'OpenNet' }
        ]
    },
    {
        id: 'postgresql', category: 'databases', level: 'basic',
        title: 'PostgreSQL', time: '15 мин',
        keywords: 'postgresql postgres sql jsonb fulltext',
        desc: 'Мощная объектно-реляционная СУБД, JSONB, полнотекстовый поиск, расширения.',
        code: `-- JSONB запрос\nSELECT data->>'name' AS name\nFROM products\nWHERE data @> '{"category": "electronics"}';\n\n-- Полнотекстовый поиск\nSELECT *\nFROM articles\nWHERE to_tsvector(content) @@\n      to_tsquery('postgres & performance');`,
        links: [
            { url: 'https://www.postgresql.org/docs/', text: 'PostgreSQL Docs', primary: true },
            { url: 'https://stepik.org/course/206413/promo', text: 'Stepik' }
        ]
    },
    {
        id: 'mariadb', category: 'databases', level: 'basic',
        title: 'MariaDB', time: '10 мин',
        keywords: 'mariadb mysql sql форк',
        desc: 'Форк MySQL с открытым исходным кодом, совместимость, дополнительные движки.',
        code: `-- Уникальные возможности MariaDB\n-- Window Functions\nSELECT name,\n       RANK() OVER (ORDER BY salary DESC)\nFROM employees;\n\n-- Temporal Tables\nCREATE TABLE users (\n  id INT,\n  name VARCHAR(100),\n  PERIOD FOR SYSTEM_TIME (start, end)\n) WITH SYSTEM VERSIONING;`,
        links: [
            { url: 'https://mariadb.com/kb/en/documentation/', text: 'MariaDB Docs', primary: true }
        ]
    },
    {
        id: 'sqlite', category: 'databases', level: 'basic',
        title: 'SQLite', time: '8 мин',
        keywords: 'sqlite embedded база данных file mobile',
        desc: 'Встраиваемая файловая СУБД, идеальна для мобильных приложений и небольших проектов.',
        code: `-- SQLite особенности:\n-- 1. Один файл = одна БД\n-- 2. Без сервера\n-- 3. Динамическая типизация\n-- 4. Идеально для тестов\n\nimport sqlite3\nconn = sqlite3.connect('app.db')\nc = conn.cursor()\nc.execute('SELECT * FROM users')`,
        links: [
            { url: 'https://www.sqlitetutorial.net/', text: 'SQLite Tutorial', primary: true }
        ]
    },
    {
        id: 'mssql', category: 'databases', level: 'basic',
        title: 'MS SQL Server', time: '12 мин',
        keywords: 'ms sql server microsoft t-sql',
        desc: 'Microsoft SQL Server, T-SQL, интеграция с экосистемой Microsoft, Enterprise.',
        code: `-- T-SQL пример\nCREATE PROCEDURE GetUserOrders\n    @UserId INT\nAS\nBEGIN\n    SELECT o.*\n    FROM Orders o\n    WHERE o.UserId = @UserId\n    ORDER BY o.CreatedDate DESC;\nEND`,
        links: [
            { url: 'https://learn.microsoft.com/en-us/sql/sql-server/', text: 'Microsoft Docs', primary: true }
        ]
    },
    {
        id: 'oracle', category: 'databases', level: 'basic',
        title: 'Oracle Database', time: '12 мин',
        keywords: 'oracle database pl/sql enterprise',
        desc: 'Корпоративная СУБД, PL/SQL, масштабируемость, высокая доступность, RAC.',
        code: `-- PL/SQL\nCREATE OR REPLACE PROCEDURE update_salary(\n    emp_id IN NUMBER,\n    new_sal IN NUMBER\n) IS\nBEGIN\n    UPDATE employees\n    SET salary = new_sal\n    WHERE employee_id = emp_id;\n    COMMIT;\nEND;`,
        links: [
            { url: 'https://docs.oracle.com/en/database/', text: 'Oracle Docs', primary: true }
        ]
    },

    // ═══ API (14) ═══
    {
        id: 'rest', category: 'api', level: 'basic',
        title: 'REST API', time: '12 мин',
        keywords: 'rest api http resources endpoints methods',
        desc: 'Архитектурный стиль REST, ресурсы, HTTP-методы, status codes, best practices 2025.',
        code: `REST Endpoints:\n\nGET    /api/users       # список\nGET    /api/users/:id   # один\nPOST   /api/users       # создать\nPUT    /api/users/:id   # обновить\nDELETE /api/users/:id   # удалить\n\nStatus Codes:\n200 OK, 201 Created\n400 Bad Request, 401 Unauthorized\n404 Not Found, 500 Server Error`,
        links: [
            { url: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api', text: 'Red Hat', primary: true },
            { url: 'https://restfulapi.net/', text: 'RESTful API' }
        ]
    },
    {
        id: 'json-api', category: 'api', level: 'basic',
        title: 'JSON API', time: '8 мин',
        keywords: 'json api спецификация формат',
        desc: 'Спецификация для построения API, формат запросов/ответов, relationships.',
        code: `{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON API"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    }
  }
}`,
        links: [
            { url: 'https://jsonapi.org/', text: 'JSON API Spec', primary: true }
        ]
    },
    {
        id: 'soap', category: 'api', level: 'basic',
        title: 'SOAP', time: '8 мин',
        keywords: 'soap xml wsdl веб сервис enterprise',
        desc: 'Протокол обмена сообщениями, XML, WSDL, WS-Security для Enterprise.',
        code: `<soap:Envelope>\n  <soap:Header/>\n  <soap:Body>\n    <GetUser>\n      <UserId>123</UserId>\n    </GetUser>\n  </soap:Body>\n</soap:Envelope>`,
        links: [
            { url: 'https://www.w3schools.com/xml/xml_soap.asp', text: 'W3Schools', primary: true }
        ]
    },
    {
        id: 'graphql', category: 'api', level: 'medium',
        title: 'GraphQL', time: '15 мин',
        keywords: 'graphql query mutation schema resolver',
        desc: 'Язык запросов для API, схемы, резолверы, подписки, Apollo. Альтернатива REST в 2025 [[27]].',
        code: `# GraphQL Query\nquery {\n  user(id: "123") {\n    name\n    email\n    posts {\n      title\n      likes\n    }\n  }\n}\n\n# Мутация\nmutation {\n  createPost(title: "Hi") {\n    id\n  }\n}`,
        links: [
            { url: 'https://graphql.org/learn/', text: 'GraphQL Learn', primary: true },
            { url: 'https://hygraph.com/blog/graphql-vs-rest-apis', text: 'GraphQL vs REST 2026' }
        ]
    },
    {
        id: 'grpc', category: 'api', level: 'medium',
        title: 'gRPC', time: '12 мин',
        keywords: 'grpc protobuf rpc performance streaming',
        desc: 'Высокопроизводительный RPC фреймворк от Google, Protocol Buffers, streaming, HTTP/2 [[28]].',
        code: `// service.proto\nsyntax = "proto3";\n\nservice UserService {\n  rpc GetUser (UserRequest) returns (User);\n  rpc ListUsers (Empty) returns (stream User);\n}\n\nmessage User {\n  int32 id = 1;\n  string name = 2;\n}`,
        links: [
            { url: 'https://grpc.io/docs/', text: 'gRPC Docs', primary: true },
            { url: 'https://www.javacodegeeks.com/2026/02/graphql-vs-rest-vs-grpc-the-2026-api-architecture-decision.html', text: 'API 2026' }
        ]
    },
    {
        id: 'openapi', category: 'api', level: 'medium',
        title: 'OpenAPI / Swagger', time: '10 мин',
        keywords: 'openapi swagger спецификация документация',
        desc: 'Спецификация для описания REST API, генерация документации, клиенты, серверы.',
        code: `openapi: 3.0.0\ninfo:\n  title: User API\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      summary: List users\n      responses:\n        '200':\n          description: Success`,
        links: [
            { url: 'https://swagger.io/specification/', text: 'OpenAPI Spec', primary: true }
        ]
    },
    {
        id: 'jwt', category: 'api', level: 'medium',
        title: 'JWT (JSON Web Tokens)', time: '12 мин',
        keywords: 'jwt token json web аутентификация',
        desc: 'Компактные токены для безопасной передачи информации, структура (header, payload, signature).',
        code: `JWT Structure:\n\nheader.payload.signature\n\neyJhbGciOiJIUzI1NiJ9.     # header\neyJ1c2VySWQiOiIxMjMifQ.   # payload\nSflKxwRJSMeKKF2QT4fwpM...  # signature\n\nPayload:\n{\n  "sub": "123",\n  "name": "John",\n  "exp": 1735689600\n}`,
        links: [
            { url: 'https://jwt.io/introduction', text: 'JWT.io', primary: true }
        ]
    },
    {
        id: 'oauth', category: 'api', level: 'medium',
        title: 'OAuth 2.0', time: '15 мин',
        keywords: 'oauth authorization grant token scope',
        desc: 'Протокол авторизации, flows (Authorization Code, PKCE), scopes, refresh tokens.',
        code: `OAuth 2.0 Flows:\n\n1. Authorization Code (Web)\n   User → Auth Server → Code → Token\n\n2. PKCE (Mobile/SPA)\n   Code + Verifier = Secure\n\n3. Client Credentials (M2M)\n   App → Token\n\nScopes: read:users, write:posts`,
        links: [
            { url: 'https://oauth.net/2/', text: 'OAuth 2.0', primary: true }
        ]
    },
    {
        id: 'basic-auth', category: 'api', level: 'basic',
        title: 'Basic Authentication', time: '6 мин',
        keywords: 'basic auth http credentials',
        desc: 'Простая HTTP-аутентификация, Base64, ограничения, использование с HTTPS.',
        code: `HTTP Request:\n\nGET /api/users HTTP/1.1\nHost: api.example.com\nAuthorization: Basic dXNlcjpwYXNz\n\n# Base64 decode:\n# dXNlcjpwYXNz → user:pass\n\n⚠️ Только с HTTPS!`,
        links: [
            { url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication', text: 'MDN Auth', primary: true }
        ]
    },
    {
        id: 'token-auth', category: 'api', level: 'medium',
        title: 'Token Authentication', time: '8 мин',
        keywords: 'token api key bearer authentication',
        desc: 'API-ключи, Bearer tokens, стратегии, хранение, ротация.',
        code: `Token Types:\n\n1. API Key\n   X-API-Key: abc123\n\n2. Bearer Token\n   Authorization: Bearer eyJhbG...\n\n3. Custom Header\n   X-Auth-Token: xyz\n\nBest Practices:\n- HTTPS only\n- Short expiration\n- Rotation policy`,
        links: [
            { url: 'https://www.okta.com/identity-101/token-based-authentication/', text: 'Okta Guide', primary: true }
        ]
    },
    {
        id: 'cookie-auth', category: 'api', level: 'basic',
        title: 'Cookie-based Auth', time: '8 мин',
        keywords: 'cookie session httpOnly secure samesite',
        desc: 'Сессионные куки, HttpOnly, Secure, SameSite, защита от CSRF.',
        code: `Set-Cookie Header:\n\nSet-Cookie: session=abc123;\n  HttpOnly;       # не доступен из JS\n  Secure;         # только HTTPS\n  SameSite=Strict; # защита CSRF\n  Path=/;\n  Max-Age=3600`,
        links: [
            { url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies', text: 'MDN Cookies', primary: true }
        ]
    },
    {
        id: 'openid', category: 'api', level: 'medium',
        title: 'OpenID Connect', time: '10 мин',
        keywords: 'openid connect oidc identity authentication',
        desc: 'Слой идентификации поверх OAuth 2.0, ID tokens, userinfo endpoint.',
        code: `OIDC Flow:\n\n1. User clicks "Login with Google"\n2. Redirect to OIDC Provider\n3. User authenticates\n4. Returns: access_token + id_token\n\nID Token (JWT):\n{\n  "iss": "google.com",\n  "sub": "123",\n  "email": "user@gmail.com"\n}`,
        links: [
            { url: 'https://openid.net/connect/', text: 'OpenID Connect', primary: true }
        ]
    },
    {
        id: 'saml', category: 'api', level: 'advanced',
        title: 'SAML', time: '12 мин',
        keywords: 'saml xml sso enterprise authentication',
        desc: 'Security Assertion Markup Language, SSO для Enterprise, XML-based.',
        code: `SAML Flow:\n\nUser → SP → IdP → AuthN → Assertion → SP\n\nSAML Assertion (XML):\n<saml:Assertion>\n  <saml:Subject>\n    <saml:NameID>user@corp.com</saml:NameID>\n  </saml:Subject>\n  <saml:AuthnStatement/>\n</saml:Assertion>`,
        links: [
            { url: 'https://www.cloudflare.com/learning/access-management/what-is-saml/', text: 'Cloudflare SAML', primary: true }
        ]
    },
    {
        id: 'web-security', category: 'api', level: 'advanced',
        title: 'Web Security (OWASP)', time: '20 мин',
        keywords: 'security owasp xss csrf sql injection',
        desc: 'OWASP Top 10, XSS, CSRF, SQL Injection, CORS, CSP, HTTPS.',
        code: `OWASP Top 10 (2025):\n\n1. Broken Access Control\n2. Cryptographic Failures\n3. Injection (SQL, XSS)\n4. Insecure Design\n5. Security Misconfiguration\n6. Vulnerable Components\n7. Auth Failures\n8. Data Integrity Failures\n9. Logging Failures\n10. SSRF\n\nCSP Header:\nContent-Security-Policy:\n  default-src 'self'`,
        links: [
            { url: 'https://owasp.org/www-project-top-ten/', text: 'OWASP Top 10', primary: true }
        ]
    },

    // ═══ CACHING (3) ═══
    {
        id: 'redis', category: 'caching', level: 'basic',
        title: 'Redis', time: '12 мин',
        keywords: 'redis cache in-memory nosql pub/sub',
        desc: 'In-memory хранилище, кэширование, сессии, pub/sub, очереди. Идеально в паре с PostgreSQL [[17]].',
        code: `# Redis команды\nSET user:123 "John"\nGET user:123\n\n# С TTL (expiration)\nSET session:abc "data" EX 3600\n\n# Pub/Sub\nSUBSCRIBE channel\nPUBLISH channel "message"\n\n# Data Types:\nString, List, Set, Hash, ZSet`,
        links: [
            { url: 'https://redis.io/docs/', text: 'Redis Docs', primary: true },
            { url: 'https://cloud.ru/blog/chto-takoye-redis', text: 'Cloud.ru' }
        ]
    },
    {
        id: 'memcached', category: 'caching', level: 'basic',
        title: 'Memcached', time: '8 мин',
        keywords: 'memcached cache distributed in-memory',
        desc: 'Распределённая система кэширования, простота, высокая производительность.',
        code: `# Memcached\nset key 0 3600 11\nhello world\n\nget key\n\n# Особенности:\n- Только strings\n- Нет persistence\n- Multi-threaded\n- Проще Redis`,
        links: [
            { url: 'https://memcached.org/', text: 'Memcached', primary: true }
        ]
    },
    {
        id: 'http-caching', category: 'caching', level: 'basic',
        title: 'HTTP Caching', time: '10 мин',
        keywords: 'http caching cache-control etag last-modified',
        desc: 'Cache-Control, ETag, Last-Modified, стратегии кэширования на уровне HTTP [[12]].',
        code: `Cache Headers:\n\nCache-Control: max-age=3600, public\nCache-Control: no-cache, no-store\nCache-Control: private, must-revalidate\n\nETag: "abc123"\nLast-Modified: Wed, 21 Oct 2025\n\nConditional:\nIf-None-Match: "abc123"\n→ 304 Not Modified`,
        links: [
            { url: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Caching', text: 'MDN Caching', primary: true }
        ]
    },

    // ═══ SERVERS (4) ═══
    {
        id: 'nginx', category: 'servers', level: 'basic',
        title: 'Nginx', time: '12 мин',
        keywords: 'nginx веб сервер reverse proxy балансировка',
        desc: 'Веб-сервер, reverse proxy, балансировка, SSL termination, конфиг виртуальных хостов [[10]].',
        code: `# nginx.conf\nserver {\n    listen 80;\n    server_name example.com;\n\n    location / {\n        proxy_pass http://backend:8000;\n        proxy_set_header Host $host;\n    }\n\n    location /static/ {\n        root /var/www;\n        expires 30d;\n    }\n}`,
        links: [
            { url: 'https://nginx.org/ru/docs/', text: 'Nginx Docs', primary: true }
        ]
    },
    {
        id: 'apache', category: 'servers', level: 'basic',
        title: 'Apache', time: '10 мин',
        keywords: 'apache httpd веб сервер modules',
        desc: 'Классический веб-сервер, модули, .htaccess, MPM, виртуальные хосты.',
        code: `# .htaccess\nRewriteEngine On\nRewriteRule ^old$ /new [R=301,L]\n\n# VirtualHost\n<VirtualHost *:80>\n    ServerName example.com\n    DocumentRoot /var/www/html\n    <Directory /var/www/html>\n        AllowOverride All\n    </Directory>\n</VirtualHost>`,
        links: [
            { url: 'https://httpd.apache.org/docs/', text: 'Apache Docs', primary: true }
        ]
    },
    {
        id: 'caddy', category: 'servers', level: 'medium',
        title: 'Caddy', time: '8 мин',
        keywords: 'caddy веб сервер https automatic tls',
        desc: 'Современный веб-сервер с автоматическим HTTPS (Let\'s Encrypt), простой конфигурацией.',
        code: `# Caddyfile\nexample.com {\n    reverse_proxy localhost:8000\n    encode gzip\n    file_server\n}\n\n# Авто HTTPS!\n# Caddy сам получает сертификат\n# Let's Encrypt`,
        links: [
            { url: 'https://caddyserver.com/docs/', text: 'Caddy Docs', primary: true }
        ]
    },
    {
        id: 'iis', category: 'servers', level: 'basic',
        title: 'IIS', time: '8 мин',
        keywords: 'iis microsoft windows веб сервер',
        desc: 'Internet Information Services, веб-сервер Microsoft, интеграция с Windows Server.',
        code: `# web.config\n<configuration>\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="SPA">\n          <match url=".*" />\n          <action type="Rewrite" url="/index.html" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>`,
        links: [
            { url: 'https://learn.microsoft.com/en-us/iis/', text: 'IIS Docs', primary: true }
        ]
    },

    // ═══ AI (12) ═══
    {
        id: 'llm', category: 'ai', level: 'basic',
        title: 'Как работают LLM', time: '15 мин',
        keywords: 'llm large language model gpt transformer',
        desc: 'Большие языковые модели, архитектура Transformer, обучение, возможности и ограничения.',
        code: `LLM Architecture:\n\nInput → Tokenize → Embedding\n        ↓\nTransformer Layers (×N)\n  - Self-Attention\n  - Feed-Forward\n        ↓\nOutput → Detokenize\n\nPopular LLMs 2026:\n- GPT-5 (OpenAI)\n- Claude 4 (Anthropic)\n- Gemini 3 (Google)\n- Llama 4 (Meta)`,
        links: [
            { url: 'https://en.wikipedia.org/wiki/Large_language_model', text: 'Wikipedia', primary: true }
        ]
    },
    {
        id: 'copilot', category: 'ai', level: 'basic',
        title: 'GitHub Copilot', time: '10 мин',
        keywords: 'copilot ai code completion github',
        desc: 'AI-ассистент для кода, автодополнение, генерация кода, чат, workspace.',
        code: `# Copilot Features:\n\n1. Inline Completions\n   def calculate_total(items):\n     # Copilot suggests:\n     return sum(i.price * i.qty for i in items)\n\n2. Chat\n   > "Explain this function"\n   > "Write tests for this"\n\n3. Workspace\n   Анализирует весь проект`,
        links: [
            { url: 'https://github.com/features/copilot', text: 'GitHub Copilot', primary: true }
        ]
    },
    {
        id: 'openai-api', category: 'ai', level: 'medium',
        title: 'OpenAI API', time: '12 мин',
        keywords: 'openai api gpt chat completions embeddings',
        desc: 'Интеграция GPT в бэкенд, Chat Completions, Embeddings, Function Calling, streaming.',
        code: `from openai import OpenAI\nclient = OpenAI()\n\nresponse = client.chat.completions.create(\n  model="gpt-5",\n  messages=[\n    {"role": "user", "content": "Hi"}\n  ],\n  temperature=0.7\n)\n\nprint(response.choices[0].message)`,
        links: [
            { url: 'https://platform.openai.com/docs', text: 'OpenAI Docs', primary: true }
        ]
    },
    {
        id: 'langchain', category: 'ai', level: 'medium',
        title: 'LangChain', time: '15 мин',
        keywords: 'langchain llm framework rag agents',
        desc: 'Фреймворк для LLM-приложений, chains, agents, RAG, memory, tools.',
        code: `from langchain.chains import RetrievalQA\nfrom langchain_openai import ChatOpenAI\n\nqa = RetrievalQA.from_chain_type(\n    llm=ChatOpenAI(model="gpt-5"),\n    chain_type="stuff",\n    retriever=vectorstore.as_retriever()\n)\n\nresult = qa.invoke("What is Python?")`,
        links: [
            { url: 'https://python.langchain.com/docs/', text: 'LangChain Docs', primary: true }
        ]
    },
    {
        id: 'rag', category: 'ai', level: 'medium',
        title: 'RAG (Retrieval-Augmented Generation)', time: '15 мин',
        keywords: 'rag retrieval augmented generation vector database',
        desc: 'Дополнение LLM внешними знаниями, vector databases, embeddings, semantic search.',
        code: `RAG Pipeline:\n\n1. Ingest:\n   Docs → Chunk → Embed → Vector DB\n\n2. Query:\n   Question → Embed → Search →\n   Context + Question → LLM → Answer\n\nVector DBs:\n- Pinecone\n- Weaviate\n- Qdrant\n- pgvector (PostgreSQL)`,
        links: [
            { url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/', text: 'Pinecone RAG', primary: true }
        ]
    },
    {
        id: 'vector-db', category: 'ai', level: 'medium',
        title: 'Vector Databases', time: '12 мин',
        keywords: 'vector database pinecone weaviate qdrant embeddings',
        desc: 'Базы данных для векторных эмбеддингов, similarity search, ANN индексы.',
        code: `# Pinecone example\nimport pinecone\n\npc = pinecone.Pinecone(api_key="...")\nindex = pc.Index("my-index")\n\n# Upsert vectors\nindex.upsert([\n    ("id1", [0.1, 0.2, ...], {"text": "hi"})\n])\n\n# Query similar\nresults = index.query(\n    vector=[0.1, 0.2, ...],\n    top_k=5\n)`,
        links: [
            { url: 'https://www.pinecone.io/', text: 'Pinecone', primary: true },
            { url: 'https://weaviate.io/', text: 'Weaviate' }
        ]
    },
    {
        id: 'embeddings', category: 'ai', level: 'medium',
        title: 'Embeddings', time: '10 мин',
        keywords: 'embeddings vector semantic similarity',
        desc: 'Векторные представления текста, семантический поиск, cosine similarity.',
        code: `from openai import OpenAI\nclient = OpenAI()\n\nresponse = client.embeddings.create(\n    model="text-embedding-3-large",\n    input=["Hello world", "Hi there"]\n)\n\n# Vector: [0.123, -0.456, 0.789, ...]\n# 3072 dimensions\n\n# Cosine similarity:\nsim = dot(a, b) / (norm(a) * norm(b))`,
        links: [
            { url: 'https://platform.openai.com/docs/guides/embeddings', text: 'OpenAI Embeddings', primary: true }
        ]
    },
    {
        id: 'prompt-engineering', category: 'ai', level: 'basic',
        title: 'Prompt Engineering', time: '12 мин',
        keywords: 'prompt engineering llm techniques chain of thought',
        desc: 'Техники составления промптов: few-shot, chain-of-thought, ReAct, structured output.',
        code: `Prompt Techniques:\n\n1. Zero-shot\n   "Translate to French: Hello"\n\n2. Few-shot\n   "EN: Hi → FR: Salut\n    EN: Bye → FR: Au revoir\n    EN: Thanks → FR: "\n\n3. Chain-of-Thought\n   "Think step by step..."\n\n4. JSON mode\n   { "format": "json" }`,
        links: [
            { url: 'https://www.promptingguide.ai/', text: 'Prompt Guide', primary: true }
        ]
    },
    {
        id: 'agents', category: 'ai', level: 'advanced',
        title: 'AI Agents', time: '15 мин',
        keywords: 'ai agents autonomous tools planning',
        desc: 'Автономные AI-агенты, планирование, инструменты, multi-agent системы.',
        code: `Agent Loop:\n\nwhile not done:\n    1. Observe (state)\n    2. Think (plan)\n    3. Act (tool call)\n    4. Reflect\n\nTools:\n- Web Search\n- Code Interpreter\n- File System\n- API Calls\n\nFrameworks:\n- LangGraph\n- CrewAI\n- AutoGen`,
        links: [
            { url: 'https://langchain-ai.github.io/langgraph/', text: 'LangGraph', primary: true }
        ]
    },
    {
        id: 'fine-tuning', category: 'ai', level: 'advanced',
        title: 'Fine-tuning', time: '15 мин',
        keywords: 'fine-tuning training lora qlora',
        desc: 'Дообучение LLM на своих данных, LoRA, QLoRA, PEFT, RLHF.',
        code: `Fine-tuning Approaches:\n\n1. Full Fine-tune (expensive)\n   Все веса обновляются\n\n2. LoRA (efficient)\n   Trainable: ~0.1% params\n   W = W₀ + BA (low-rank)\n\n3. QLoRA\n   Quantized + LoRA\n   4-bit model on 24GB GPU\n\nTools:\n- Hugging Face PEFT\n- Axolotl\n- Unsloth`,
        links: [
            { url: 'https://huggingface.co/docs/transformers/training', text: 'HF Training', primary: true }
        ]
    },
    {
        id: 'ai-safety', category: 'ai', level: 'advanced',
        title: 'AI Safety & Ethics', time: '12 мин',
        keywords: 'ai safety ethics guardrails bias',
        desc: 'Безопасность AI, guardrails, bias mitigation, content filtering, RLHF.',
        code: `AI Safety Layers:\n\n1. Input Guardrails\n   - Prompt injection detection\n   - Toxicity filter\n\n2. Model Safety\n   - RLHF training\n   - Constitutional AI\n\n3. Output Guardrails\n   - Content moderation\n   - Fact-checking\n   - PII detection\n\nTools:\n- Guardrails AI\n- NeMo Guardrails\n- LlamaGuard`,
        links: [
            { url: 'https://docs.guardrailsai.com/', text: 'Guardrails AI', primary: true }
        ]
    },
    {
        id: 'ai-deployment', category: 'ai', level: 'advanced',
        title: 'AI Model Deployment', time: '15 мин',
        keywords: 'ai deployment inference serving optimization',
        desc: 'Развёртывание моделей, inference оптимизация, vLLM, TGI, quantization.',
        code: `Deployment Options:\n\n1. vLLM (high-throughput)\n   paged attention, continuous batching\n\n2. TGI (HuggingFace)\n   text-generation-inference\n\n3. Ollama (local)\n   ollama run llama3.1\n\nOptimizations:\n- Quantization (INT8, INT4)\n- KV Cache\n- Speculative decoding\n- Batching`,
        links: [
            { url: 'https://docs.vllm.ai/', text: 'vLLM', primary: true }
        ]
    },

    // ═══ TESTING (3) ═══
    {
        id: 'unit-testing', category: 'testing', level: 'basic',
        title: 'Unit Testing', time: '12 мин',
        keywords: 'unit testing модульные тесты tdd mock',
        desc: 'Модульное тестирование, изоляция, моки, TDD подход, coverage.',
        code: `# pytest example\ndef test_add():\n    assert add(2, 3) == 5\n\n# С моками\ndef test_send_email(mock_smtp):\n    send_email("test@mail.com")\n    mock_smtp.send.assert_called_once()\n\n# Coverage\npytest --cov=app tests/\n# Target: 80%+`,
        links: [
            { url: 'https://docs.pytest.org/', text: 'pytest', primary: true }
        ]
    },
    {
        id: 'integration-testing', category: 'testing', level: 'medium',
        title: 'Integration Testing', time: '12 мин',
        keywords: 'integration testing api database e2e',
        desc: 'Интеграционные тесты, тестирование API, работа с БД, тестовые контейнеры.',
        code: `# Testcontainers\nfrom testcontainers.postgres import PostgresContainer\n\ndef test_user_api():\n    with PostgresContainer() as pg:\n        # Real DB!\n        client = TestClient(app)\n        response = client.post(\n            "/users",\n            json={"name": "Test"}\n        )\n        assert response.status_code == 201`,
        links: [
            { url: 'https://testcontainers.com/', text: 'Testcontainers', primary: true }
        ]
    },
    {
        id: 'e2e-testing', category: 'testing', level: 'medium',
        title: 'E2E Testing', time: '12 мин',
        keywords: 'e2e testing playwright cypress selenium',
        desc: 'End-to-end тестирование, Playwright, Cypress, Selenium, автоматизация UI.',
        code: `# Playwright\nfrom playwright.sync_api import sync_playwright\n\ndef test_login():\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.goto("https://app.com")\n        page.fill("#email", "user@test.com")\n        page.click("button[type=submit]")\n        assert page.url.endswith("/dashboard")`,
        links: [
            { url: 'https://playwright.dev/python/', text: 'Playwright', primary: true }
        ]
    },

    // ═══ CI/CD (1) ═══
    {
        id: 'cicd', category: 'cicd', level: 'basic',
        title: 'CI/CD', time: '15 мин',
        keywords: 'ci cd continuous integration delivery pipeline',
        desc: 'Непрерывная интеграция и доставка, pipelines, автоматизация деплоя, best practices 2025.',
        code: `# .github/workflows/ci.yml\nname: CI/CD\non: [push, pull_request]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pip install -r requirements.txt\n      - run: pytest --cov\n  \n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - run: deploy-to-production`,
        links: [
            { url: 'https://docs.github.com/en/actions', text: 'GitHub Actions', primary: true },
            { url: 'https://skyeng.ru/it-industry/it/ci-cd-dlya-novichkov-prostoye-rukovodstvo/', text: 'Skyeng' }
        ]
    },

    // ═══ DB ADVANCED (6) ═══
    {
        id: 'transactions', category: 'dbadvanced', level: 'medium',
        title: 'Транзакции и ACID', time: '15 мин',
        keywords: 'transactions acid isolation locks',
        desc: 'Транзакции БД, ACID свойства, уровни изоляции, блокировки.',
        code: `ACID:\n\nA - Atomicity      (всё или ничего)\nC - Consistency    (целостность)\nI - Isolation      (изолированность)\nD - Durability     (долговечность)\n\nIsolation Levels:\n1. Read Uncommitted (dirty reads)\n2. Read Committed\n3. Repeatable Read\n4. Serializable (strict)`,
        links: [
            { url: 'https://en.wikipedia.org/wiki/Database_transaction', text: 'Wikipedia', primary: true }
        ]
    },
    {
        id: 'indexing', category: 'dbadvanced', level: 'medium',
        title: 'Индексирование', time: '12 мин',
        keywords: 'indexing btree hash composite query optimization',
        desc: 'Типы индексов (B-tree, Hash, GIN, GiST), composite indexes, query optimization.',
        code: `-- B-tree (default)\nCREATE INDEX idx_users_email ON users(email);\n\n-- Composite\nCREATE INDEX idx_orders_user_date\nON orders(user_id, created_at);\n\n-- GIN (для JSONB, Full Text)\nCREATE INDEX idx_data ON products\nUSING GIN (data jsonb_path_ops);\n\n-- EXPLAIN ANALYZE\nEXPLAIN ANALYZE\nSELECT * FROM users WHERE email = '...';`,
        links: [
            { url: 'https://use-the-index-luke.com/', text: 'Use The Index Luke', primary: true }
        ]
    },
    {
        id: 'normalization', category: 'dbadvanced', level: 'medium',
        title: 'Нормализация', time: '10 мин',
        keywords: 'normalization 1nf 2nf 3nf denormalization',
        desc: 'Нормальные формы (1NF, 2NF, 3NF, BCNF), денормализация, trade-offs.',
        code: `Normal Forms:\n\n1NF: Атомарные значения\n2NF: 1NF + нет partial dependencies\n3NF: 2NF + нет transitive deps\nBCNF: строгая версия 3NF\n\nExample:\nUsers(id, name, email)\nOrders(id, user_id, product_id, qty)\nProducts(id, name, price)\n\nDenormalize for read performance`,
        links: [
            { url: 'https://www.guru99.com/database-normalization.html', text: 'Guru99', primary: true }
        ]
    },
    {
        id: 'sharding', category: 'dbadvanced', level: 'advanced',
        title: 'Шардинг', time: '15 мин',
        keywords: 'sharding horizontal partitioning distributed',
        desc: 'Горизонтальное партицирование, стратегии шардинга, консистентный хеш.',
        code: `Sharding Strategies:\n\n1. Range-based\n   Shard 1: A-M\n   Shard 2: N-Z\n\n2. Hash-based\n   shard = hash(key) % N\n\n3. Consistent Hashing\n   Ring-based, minimal rebalancing\n\n4. Directory-based\n   Lookup table: key → shard\n\nChallenges:\n- Cross-shard queries\n- Rebalancing\n- Joins`,
        links: [
            { url: 'https://www.mongodb.com/basics/sharding', text: 'MongoDB Sharding', primary: true }
        ]
    },
    {
        id: 'replication', category: 'dbadvanced', level: 'advanced',
        title: 'Репликация', time: '12 мин',
        keywords: 'replication master slave multi-master',
        desc: 'Master-slave, multi-master, синхронная/асинхронная репликация, failover.',
        code: `Replication Types:\n\n1. Master-Slave (Primary-Replica)\n   Write → Master\n   Read  → Replicas\n\n2. Multi-Master\n   Write anywhere\n   Conflict resolution needed\n\n3. Synchronous vs Async\n   Sync: 100% consistency, slow\n   Async: fast, possible lag\n\nPostgreSQL:\n- Streaming replication\n- Logical replication`,
        links: [
            { url: 'https://www.postgresql.org/docs/current/runtime-config-replication.html', text: 'PG Replication', primary: true }
        ]
    },
    {
        id: 'nosql', category: 'dbadvanced', level: 'medium',
        title: 'NoSQL базы данных', time: '15 мин',
        keywords: 'nosql mongodb cassandra dynamodb document',
        desc: 'Document (MongoDB), Key-Value (Redis), Column (Cassandra), Graph (Neo4j).',
        code: `NoSQL Types:\n\n1. Document (MongoDB)\n   { "name": "John", "posts": [...] }\n\n2. Key-Value (Redis, DynamoDB)\n   key → value\n\n3. Column (Cassandra, HBase)\n   Wide-column store\n\n4. Graph (Neo4j)\n   (User)-[:FOLLOWS]->(User)\n\nCAP Theorem:\nChoose 2: Consistency, Availability,\nPartition tolerance`,
        links: [
            { url: 'https://www.mongodb.com/nosql-explained', text: 'MongoDB NoSQL', primary: true }
        ]
    },

    // ═══ ADVANCED (10) ═══
    {
        id: 'docker', category: 'advanced', level: 'medium',
        title: 'Docker', time: '15 мин',
        keywords: 'docker container контейнер dockerfile compose',
        desc: 'Контейнеризация, образы, Dockerfile, multi-stage builds, best practices 2025 [[21]].',
        code: `# Dockerfile (best practices 2025)\nFROM python:3.13-slim AS base\n\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\nCOPY . .\n\n# Multi-stage\nFROM base AS test\nRUN pytest\n\nFROM base AS prod\nCMD ["python", "main.py"]\n\n# docker-compose.yml\nservices:\n  app:\n    build: .\n    ports: ["8000:8000"]\n  db:\n    image: postgres:16`,
        links: [
            { url: 'https://docs.docker.com/', text: 'Docker Docs', primary: true },
            { url: 'https://usama.codes/blog/docker-kubernetes-best-practices-2025', text: 'Best Practices 2026' }
        ]
    },
    {
        id: 'kubernetes', category: 'advanced', level: 'advanced',
        title: 'Kubernetes', time: '20 мин',
        keywords: 'kubernetes k8s pods deployments services',
        desc: 'Оркестрация контейнеров, Pods, Deployments, Services, ConfigMaps, security 2025 [[18]].',
        code: `# deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: backend\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: backend\n  template:\n    spec:\n      containers:\n      - name: app\n        image: myapp:1.0\n        ports:\n        - containerPort: 8000\n        resources:\n          limits:\n            memory: "512Mi"\n            cpu: "500m"`,
        links: [
            { url: 'https://kubernetes.io/docs/', text: 'Kubernetes Docs', primary: true },
            { url: 'https://kodekloud.com/blog/kubernetes-best-practices-2025/', text: 'K8s Best Practices 2025' }
        ]
    },
    {
        id: 'microservices', category: 'advanced', level: 'advanced',
        title: 'Микросервисы', time: '20 мин',
        keywords: 'microservices architecture decomposition saga',
        desc: 'Архитектура микросервисов, декомпозиция,Saga pattern, service mesh, API Gateway.',
        code: `Microservices Patterns:\n\n1. API Gateway\n   Single entry point\n\n2. Service Discovery\n   Consul, etcd\n\n3. Circuit Breaker\n   Prevent cascading failures\n\n4. Saga Pattern\n   Distributed transactions\n   Choreography vs Orchestration\n\n5. Event Sourcing\n   Store events, not state\n\n6. CQRS\n   Separate read/write models`,
        links: [
            { url: 'https://microservices.io/', text: 'Microservices.io', primary: true }
        ]
    },
    {
        id: 'message-queues', category: 'advanced', level: 'medium',
        title: 'Очереди сообщений', time: '15 мин',
        keywords: 'message queue kafka rabbitmq rabbitmq sqs',
        desc: 'Kafka, RabbitMQ, SQS, Pub/Sub, event-driven architecture, dead letter queues.',
        code: `Message Brokers:\n\n1. Apache Kafka\n   - Distributed log\n   - High throughput\n   - Persistent\n\n2. RabbitMQ\n   - AMQP protocol\n   - Flexible routing\n   - Lower throughput\n\n3. AWS SQS\n   - Managed\n   - Simple\n\nPatterns:\n- Pub/Sub (topics)\n- Work Queues\n- Dead Letter Queue (DLQ)`,
        links: [
            { url: 'https://kafka.apache.org/documentation/', text: 'Kafka Docs', primary: true }
        ]
    },
    {
        id: 'websockets', category: 'advanced', level: 'medium',
        title: 'WebSockets', time: '10 мин',
        keywords: 'websockets realtime bidirectional socket',
        desc: 'Двусторонняя связь в реальном времени, Socket.io, альтернативы (SSE, Long Polling).',
        code: `# Python WebSockets\nimport websockets\n\nasync def handler(websocket):\n    async for message in websocket:\n        await websocket.send(f"Echo: {message}")\n\nasync def main():\n    async with websockets.serve(handler, "0.0.0.0", 8765):\n        await asyncio.Future()\n\n# Alternatives:\n# SSE (Server-Sent Events) - one-way\n# Long Polling - legacy`,
        links: [
            { url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', text: 'MDN WebSockets', primary: true }
        ]
    },
    {
        id: 'serverless', category: 'advanced', level: 'medium',
        title: 'Serverless', time: '12 мин',
        keywords: 'serverless lambda functions aws azure',
        desc: 'FaaS (AWS Lambda, Azure Functions), триггеры, cold starts, монолит vs микро.',
        code: `# AWS Lambda (Python)\nimport json\n\ndef handler(event, context):\n    return {\n        "statusCode": 200,\n        "body": json.dumps({\n            "message": "Hello!"\n        })\n    }\n\n# Triggers:\n# - HTTP (API Gateway)\n# - S3 events\n# - DynamoDB streams\n# - Cron (EventBridge)\n\nCold start: 100ms-2s\nWarm: 1-10ms`,
        links: [
            { url: 'https://aws.amazon.com/lambda/', text: 'AWS Lambda', primary: true }
        ]
    },
    {
        id: 'cdn', category: 'advanced', level: 'basic',
        title: 'CDN (Content Delivery Network)', time: '8 мин',
        keywords: 'cdn cloudflare fastly edge caching',
        desc: 'Сеть доставки контента, edge locations, кэширование статических ресурсов.',
        code: `CDN Benefits:\n\n1. Lower latency (edge locations)\n2. Reduced origin load\n3. DDoS protection\n4. SSL termination\n\nPopular CDNs:\n- Cloudflare\n- AWS CloudFront\n- Fastly\n- Akamai\n\nCache Strategy:\n- Static: long TTL (1 year)\n- Dynamic: short TTL or no-cache\n- Images: immutable hash names`,
        links: [
            { url: 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/', text: 'Cloudflare CDN', primary: true }
        ]
    },
    {
        id: 'load-balancer', category: 'advanced', level: 'medium',
        title: 'Load Balancing', time: '12 мин',
        keywords: 'load balancer nginx haproxy l4 l7',
        desc: 'L4 vs L7 балансировщики, алгоритмы (Round Robin, Least Conn), health checks.',
        code: `Load Balancing:\n\nL4 (Transport):\n- TCP/UDP level\n- Faster\n- Less smart\n- Example: HAProxy\n\nL7 (Application):\n- HTTP level\n- Content-based routing\n- SSL termination\n- Example: Nginx\n\nAlgorithms:\n1. Round Robin\n2. Least Connections\n3. IP Hash (sticky)\n4. Weighted\n\nHealth Check:\nGET /health → 200 OK`,
        links: [
            { url: 'https://www.nginx.com/resources/glossary/load-balancing/', text: 'Nginx LB', primary: true }
        ]
    },
    {
        id: 'design-patterns', category: 'advanced', level: 'medium',
        title: 'Паттерны проектирования', time: '20 мин',
        keywords: 'design patterns singleton factory observer strategy',
        desc: 'Creational, Structural, Behavioral паттерны, GoF, SOLID в действии.',
        code: `GoF Patterns:\n\nCreational:\n- Singleton\n- Factory\n- Builder\n\nStructural:\n- Adapter\n- Decorator\n- Facade\n\nBehavioral:\n- Observer\n- Strategy\n- Command\n\n# Strategy Pattern\nclass PaymentStrategy:\n    def pay(self, amount): pass\n\nclass CardPayment(PaymentStrategy):\n    def pay(self, amount):\n        # card logic`,
        links: [
            { url: 'https://refactoring.guru/design-patterns', text: 'Refactoring Guru', primary: true }
        ]
    },
    {
        id: 'solid', category: 'advanced', level: 'medium',
        title: 'SOLID принципы', time: '15 мин',
        keywords: 'solid srp ocp liskov isp dip',
        desc: '5 принципов ООП: SRP, OCP, LSP, ISP, DIP для поддерживаемого кода.',
        code: `SOLID:\n\nS - Single Responsibility\n    Класс = одна причина измениться\n\nO - Open/Closed\n    Open for extension, closed for mod\n\nL - Liskov Substitution\n    Подклассы заменяют базовый класс\n\nI - Interface Segregation\n    Много узких интерфейсов\n\nD - Dependency Inversion\n    Зависим от абстракций`,
        links: [
            { url: 'https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html', text: 'Uncle Bob', primary: true }
        ]
    },

    // ═══ OPS (1) ═══
    {
        id: 'operations', category: 'ops', level: 'basic',
        title: 'Linux и Terminal', time: '15 мин',
        keywords: 'linux terminal commands bash ssh',
        desc: 'Linux CLI, основные команды, bash скрипты, SSH, permissions, мониторинг.',
        code: `# Essential Linux Commands\n\n# Navigation\nls, cd, pwd\n\n# Files\ncp, mv, rm, cat, less, grep\n\n# Permissions\nchmod 755 file\nchown user:group file\n\n# Processes\nps aux, top, htop, kill\n\n# Network\ncurl, wget, ssh, netstat\n\n# Monitoring\ndf -h, free -m, iostat\n\n# SSH\nssh user@host\nscp file user@host:/path`,
        links: [
            { url: 'https://training.linuxfoundation.org/resources/free-linux-training/', text: 'Linux Foundation', primary: true }
        ]
    },

    // ═══ SCALING (2) ═══
    {
        id: 'observability', category: 'scaling', level: 'advanced',
        title: 'Observability', time: '15 мин',
        keywords: 'observability monitoring logging tracing metrics',
        desc: 'Три столпа: Metrics, Logs, Traces. Prometheus, Grafana, ELK, Jaeger, OpenTelemetry.',
        code: `Three Pillars:\n\n1. Metrics (числа)\n   Prometheus + Grafana\n   cpu_usage, request_count\n\n2. Logs (события)\n   ELK Stack (Elasticsearch, Logstash, Kibana)\n   [2026-01-15 12:00:00] ERROR: ...\n\n3. Traces (запросы)\n   Jaeger, Zipkin\n   Request flow across services\n\nOpenTelemetry:\nUnified standard for all three`,
        links: [
            { url: 'https://opentelemetry.io/docs/', text: 'OpenTelemetry', primary: true }
        ]
    },
    {
        id: 'mitigation', category: 'scaling', level: 'advanced',
        title: 'Mitigation Strategies', time: '15 мин',
        keywords: 'mitigation circuit breaker throttling backpressure',
        desc: 'Graceful Degradation, Throttling, Backpressure, Loadshifting, Circuit Breaker.',
        code: `Resilience Patterns:\n\n1. Circuit Breaker\n   Closed → Open → Half-Open\n   Stop failing fast\n\n2. Throttling\n   Rate limiting (100 req/min)\n   Token bucket, Leaky bucket\n\n3. Backpressure\n   Slow down producer\n   when consumer is slow\n\n4. Retry with Backoff\n   Exponential: 1s, 2s, 4s, 8s\n\n5. Bulkhead\n   Isolate failures`,
        links: [
            { url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker', text: 'Microsoft Patterns', primary: true }
        ]
    }
];