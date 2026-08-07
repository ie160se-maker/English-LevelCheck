const sections = [
  {
    id: 'listening',
    title: '領域1：リスニング理解',
    weightLabel: '最大20点',
    help: '甘めに自己評価しにくいよう、初見話題・自然な速さ・アクセント差への対応を厳しめに見ます。',
    questions: [
      {
        id: 'l1',
        title: 'ゆっくり・はっきり話される1対1の英語を、補助なしでどこまで安定して理解できますか',
        options: [
          { value: 0, label: '単語を少し拾える程度で、内容理解はほぼ難しい' },
          { value: 1, label: '自己紹介や家族など、ごく限られた定番内容なら一部わかる' },
          { value: 2, label: '買い物・道案内・基本連絡など、身近な内容なら要点を追えることが多い' },
          { value: 3, label: '学校・仕事・趣味などの標準的な内容なら、聞き返しが少なく主旨をつかめる' },
          { value: 4, label: '多少長い説明でも、初見で大筋を外しにくく、詳細もかなり保持できる' },
          { value: 5, label: '話題が初見でも、速さや構成に左右されず、細部や含意まで高精度で理解できる' }
        ]
      },
      {
        id: 'l2',
        title: '動画・会議・ニュースなどを英語で聞くとき、実感に最も近いものを選んでください',
        options: [
          { value: 0, label: '字幕や和訳がないと、内容をほぼ追えない' },
          { value: 1, label: '短い案内や定型的な内容なら分かることがある' },
          { value: 2, label: '日常系の短い動画なら、主題はつかめることがある' },
          { value: 3, label: '標準的な会話や説明なら、主要論点をかなり追える' },
          { value: 4, label: '議論や講義でも、馴染みのあるテーマなら論点の流れを保てる' },
          { value: 5, label: '映画・討論・講義でも、話者の意図や暗黙の前提までかなり拾える' }
        ]
      },
      {
        id: 'l3',
        title: 'アクセント差・雑音・自然な速さへの対応として近いものを選んでください',
        options: [
          { value: 0, label: '少し条件が悪いだけで理解が崩れやすい' },
          { value: 1, label: 'かなり配慮してもらえれば対応できることがある' },
          { value: 2, label: '静かな環境なら、基本会話はなんとか追える' },
          { value: 3, label: '自然な速さでも、日常会話なら要点は維持できる' },
          { value: 4, label: 'アクセント差や雑音があっても、重要点を落としにくい' },
          { value: 5, label: '速さ・アクセント・環境差があっても、高い理解精度を保てる' }
        ]
      }
    ]
  },
  {
    id: 'interaction',
    title: '領域2：会話のやりとり',
    weightLabel: '最大20点',
    help: '定型文で何とかなるかではなく、準備なしで会話を始め、修正し、続けられるかを見ます。',
    questions: [
      {
        id: 'i1',
        title: '旅行・店・予約・職場の用件を英語で処理するとき、最も近いものを選んでください',
        options: [
          { value: 0, label: '一人ではほぼ対応できない' },
          { value: 1, label: '定型表現が一致する場面だけ最低限やりとりできる' },
          { value: 2, label: '簡単な依頼や確認なら、相手の助けを受けながら進められる' },
          { value: 3, label: 'よくある状況なら自力で切り抜けられるが、想定外に弱い' },
          { value: 4, label: '想定外のやりとりでも、確認や言い換えで修正しながら対応できる' },
          { value: 5, label: '複雑な調整や交渉でも、相手に配慮しつつ自然に主導できる' }
        ]
      },
      {
        id: 'i2',
        title: '準備なしで英会話を始めるとき、実際の近さとして最も当てはまるものを選んでください',
        options: [
          { value: 0, label: 'ほぼ話し始められない' },
          { value: 1, label: '名前・出身など短いやりとりなら可能' },
          { value: 2, label: '身近な話題なら短く応答できるが、自分から広げにくい' },
          { value: 3, label: '趣味・仕事・最近の出来事なら、一定時間会話を続けられる' },
          { value: 4, label: '相手の発言を拾い、質問や意見で会話を自然に広げられる' },
          { value: 5, label: '初対面でも雑談・説明・議論を切り替えながら滑らかに会話を回せる' }
        ]
      },
      {
        id: 'i3',
        title: '自分の考えを会話の中で伝え続ける力として近いものを選んでください',
        options: [
          { value: 0, label: '単語中心で、会話を続けるのが難しい' },
          { value: 1, label: '短文で答えることが多く、自分から展開しにくい' },
          { value: 2, label: '簡単な理由づけをしながら、短い会話なら維持できる' },
          { value: 3, label: '意見・経験・希望をつないで、会話の流れを保てる' },
          { value: 4, label: '議論でも自分の立場を説明し、相手の反応に応じて修正できる' },
          { value: 5, label: 'ニュアンスを調整しながら、説得・議論・合意形成まで一貫して行える' }
        ]
      }
    ]
  },
  {
    id: 'production',
    title: '領域3：話す流暢さ・説明力',
    weightLabel: '最大20点',
    help: 'B2以上は「話せる気がする」ではなく、長めに・具体的に・詰まりすぎず話せることを前提に評価します。',
    questions: [
      {
        id: 'p1',
        title: '自分のことを英語で説明するとき、最も近いものを選んでください',
        options: [
          { value: 0, label: '単語だけ、または短い定型文だけになりやすい' },
          { value: 1, label: '住んでいる場所や仕事などを短い文で言える' },
          { value: 2, label: '家族・仕事・最近の出来事を、数文つなげて説明できる' },
          { value: 3, label: '経験や計画を、途切れすぎず一定のまとまりで話せる' },
          { value: 4, label: '背景や具体例も加えて、聞き手が理解しやすい説明ができる' },
          { value: 5, label: '長めの話でも構成よく整理し、要点と詳細を意識して話せる' }
        ]
      },
      {
        id: 'p2',
        title: '理由・比較・意見を述べる場面で、実際に近いものを選んでください',
        options: [
          { value: 0, label: 'ほとんど言えない、または日本語で補いたくなる' },
          { value: 1, label: 'good / bad など単純な評価なら言える' },
          { value: 2, label: '簡単な理由を添えて、自分の意見を短く言える' },
          { value: 3, label: '利点・欠点を挙げながら、自分の考えをある程度説明できる' },
          { value: 4, label: '具体例や条件の違いも示しながら、比較して説明できる' },
          { value: 5, label: '複雑なテーマでも、筋道立てて説得的に展開できる' }
        ]
      },
      {
        id: 'p3',
        title: '英語を話すときの流暢さについて、最も近いものを選んでください',
        options: [
          { value: 0, label: '語がなかなか出ず、止まる時間がかなり長い' },
          { value: 1, label: '簡単な内容でも、かなり探しながら話す' },
          { value: 2, label: '身近な話題なら話せるが、詰まりや言い直しが多い' },
          { value: 3, label: '日常・仕事のよくある話題なら、比較的スムーズに話せる' },
          { value: 4, label: '複雑な話題でも、大きく止まりすぎず自然に話せる' },
          { value: 5, label: '表現探しを強く意識させず、柔軟に話し続けられる' }
        ]
      },
      {
        id: 'p4',
        title: '発音や音の再現について、最も近いものを選んでください',
        options: [
          { value: 0, label: 'よく聞き返され、自分でも音の違いをほとんど再現できない' },
          { value: 1, label: '聞き返されることが多く、母音や子音の違いに強い不安がある' },
          { value: 2, label: '簡単な文なら通じるが、音の崩れや強勢で伝わりにくくなることがある' },
          { value: 3, label: '基本的には通じるが、速くなると音の連結や強勢が不安定になる' },
          { value: 4, label: '強勢・区切り・主要音は概ね安定し、聞き返されにくい' },
          { value: 5, label: '音の区別・強勢・リズム・連結までかなり安定して再現できる' }
        ]
      }
    ]
  },
  {
    id: 'flexibility',
    title: '領域4：言い換え・抽象度・柔軟さ',
    weightLabel: '最大20点',
    help: '高評価には、語が出ない時の立て直しと、抽象的話題の運用力が必要です。',
    questions: [
      {
        id: 'f1',
        title: '言いたい単語が出ないときの対応に近いものを選んでください',
        options: [
          { value: 0, label: 'そこで止まってしまうことが多い' },
          { value: 1, label: 'ジェスチャーや日本語に頼ることが多い' },
          { value: 2, label: '簡単な別表現なら使えることがある' },
          { value: 3, label: '言い換えや説明で、たいてい切り抜けられる' },
          { value: 4, label: '語を選び直しながら、自然さを大きく崩さず意味を保てる' },
          { value: 5, label: '相手にほぼ気づかれない形で再構成し、会話を継続できる' }
        ]
      },
      {
        id: 'f2',
        title: '抽象的・専門的な話題を英語で扱うとき、最も近いものを選んでください',
        options: [
          { value: 0, label: 'ほぼ対応できない' },
          { value: 1, label: 'ごく基本的な表現に限定される' },
          { value: 2, label: '知っている分野なら、簡単な説明はできる' },
          { value: 3, label: 'ある程度なじみのあるテーマなら、筋道を立てて話せる' },
          { value: 4, label: '抽象的なテーマでも、立場や論点を比較的明確に示せる' },
          { value: 5, label: '複雑な概念や微妙な違いまで、精密に扱える' }
        ]
      },
      {
        id: 'f3',
        title: '丁寧さ・カジュアルさ・説得力などの調整に近いものを選んでください',
        options: [
          { value: 0, label: '表現の調整までは難しい' },
          { value: 1, label: '決まった言い方なら使える' },
          { value: 2, label: '基本的な丁寧表現は意識できる' },
          { value: 3, label: '場面に応じて、言い方をある程度変えられる' },
          { value: 4, label: '相手や目的に応じて、トーンや圧のかけ方を自然に切り替えられる' },
          { value: 5, label: '微妙なニュアンスや含みまで狙って表現できる' }
        ]
      }
    ]
  },
  {
    id: 'realworld',
    title: '領域5-A：実際の使用実績',
    weightLabel: '最大20点',
    help: '試験未受験でも不利にならないよう、ここで同等の証拠を確保できます。',
    questions: [
      {
        id: 'r1',
        title: '英語だけでやりとりする場面の経験に近いものを選んでください',
        options: [
          { value: 0, label: 'ほぼ経験がない' },
          { value: 1, label: '短い接客・旅行・簡単なチャット程度ならある' },
          { value: 2, label: '数分の会話や簡単な打ち合わせなら経験がある' },
          { value: 3, label: '英語だけで一定時間やりとりした経験が何度もある' },
          { value: 4, label: '会議・共同作業・学習などで継続的に英語を使っている' },
          { value: 5, label: '英語を主要言語の一つとして、仕事や学業で継続運用している' }
        ]
      },
      {
        id: 'r2',
        title: '英語で説明・発表・議論をした経験に近いものを選んでください',
        options: [
          { value: 0, label: 'ほぼない' },
          { value: 1, label: '短い自己紹介や定型説明だけならある' },
          { value: 2, label: '簡単な説明や報告をしたことがある' },
          { value: 3, label: '質疑応答を含むやりとりを経験したことがある' },
          { value: 4, label: '会議・商談・授業などで、自分の意見を継続的に出している' },
          { value: 5, label: '交渉・説得・ファシリテーションまで英語で行っている' }
        ]
      },
      {
        id: 'r3',
        title: '英語だけで会話を続けられる時間感覚に近いものを選んでください',
        options: [
          { value: 0, label: '1分も続けにくい' },
          { value: 1, label: '1〜3分程度ならなんとか' },
          { value: 2, label: '5分前後なら身近な話題で続けられる' },
          { value: 3, label: '10〜20分程度なら日常/仕事の話題で続けられる' },
          { value: 4, label: '30分以上でも、話題を切り替えながら続けられる' },
          { value: 5, label: '長時間でも無理なく会話・議論・雑談を行き来できる' }
        ]
      }
    ]
  }
];

const testMappings = {
  ielts: [
    { value: 'none', label: '受験なし / 覚えていない', score: 0, note: '未入力でも不利になりません' },
    { value: 'a1', label: '4.0未満', score: 4, note: 'A1付近の参考値' },
    { value: 'a2', label: '4.0〜5.0', score: 8, note: 'A2付近の参考値' },
    { value: 'b1', label: '5.0〜5.5', score: 12, note: 'B1付近の参考値' },
    { value: 'b2', label: '5.5〜6.5', score: 16, note: 'B2付近の参考値' },
    { value: 'c1', label: '7.0〜8.0', score: 19, note: 'C1付近の参考値' },
    { value: 'c2', label: '8.5〜9.0', score: 20, note: 'C2付近の参考値' }
  ],
  toeiclr: [
    { value: 'none', label: '受験なし / 覚えていない', score: 0, note: '未入力でも不利になりません' },
    { value: 'a1', label: '120〜224', score: 4, note: 'A1相当の参考値' },
    { value: 'a2', label: '225〜549', score: 8, note: 'A2〜B1未満の参考値' },
    { value: 'b1', label: '550〜784', score: 12, note: 'B1相当の参考値' },
    { value: 'b2', label: '785〜944', score: 15, note: 'B2相当の参考値。会話直結ではないため控えめ加点' },
    { value: 'c1', label: '945以上', score: 17, note: 'C1相当の参考値。会話直結ではないため上限を少し抑制' }
  ],
  toeicsw: [
    { value: 'none', label: '受験なし / 覚えていない', score: 0, note: '未入力でも不利になりません' },
    { value: 'a1', label: '50〜89', score: 4, note: 'A1相当の参考値' },
    { value: 'a2', label: '90〜119', score: 8, note: 'A2相当の参考値' },
    { value: 'b1', label: '120〜159', score: 12, note: 'B1相当の参考値' },
    { value: 'b2', label: '160〜179', score: 16, note: 'B2相当の参考値' },
    { value: 'c1', label: '180', score: 19, note: 'C1相当の参考値' }
  ],
  toefl: [
    { value: 'none', label: '受験なし / 覚えていない', score: 0, note: '未入力でも不利になりません' },
    { value: 'belowb1', label: '56以下（B1未満の参考）', score: 8, note: '学術用テストのため補助証拠として控えめ加点' },
    { value: 'b1', label: '57〜86', score: 12, note: 'B1相当の参考値' },
    { value: 'b2', label: '87〜109', score: 16, note: 'B2相当の参考値' },
    { value: 'c1', label: '110〜120', score: 19, note: 'C1相当の参考値' }
  ],
  versant: [
    { value: 'none', label: '受験なし / 覚えていない', score: 0, note: '未入力でも不利になりません' },
    { value: 'belowa1', label: '20〜25（A1未満）', score: 2, note: 'A1未満の参考値' },
    { value: 'a1', label: '26〜35', score: 4, note: 'A1相当の参考値' },
    { value: 'a2', label: '36〜46', score: 8, note: 'A2相当の参考値' },
    { value: 'b1', label: '47〜57', score: 12, note: 'B1相当の参考値' },
    { value: 'b2', label: '58〜68', score: 16, note: 'B2相当の参考値' },
    { value: 'c1', label: '69〜78', score: 19, note: 'C1相当の参考値' },
    { value: 'c2', label: '79〜80', score: 20, note: 'C2相当の参考値' }
  ],
  eiken: [
    { value: 'none', label: '未受験 / 分からない', score: 0, note: '未入力でも不利になりません' },
    { value: 'a1', label: '5級〜3級', score: 4, note: 'A1付近の参考値' },
    { value: 'a2', label: '準2級', score: 8, note: 'A2付近の参考値' },
    { value: 'b1', label: '2級', score: 12, note: 'B1付近の参考値' },
    { value: 'b2', label: '準1級', score: 17, note: 'B2〜C1間の参考値' },
    { value: 'c1', label: '1級', score: 19, note: 'C1以上の参考値' }
  ]
};

const levels = [
  {
    code: 'A1',
    min: 0,
    max: 26,
    title: 'はじめの会話',
    summary: 'ごく基本的な自己紹介や、身近な内容の短いやりとりが中心です。まずは音と口の使い方を固めると、聞く・話すの両方が伸びやすい段階です。',
    actions: [
      '毎日10〜15分、ゆっくり音声の英語をシャドーイングする',
      '自己紹介・仕事紹介・趣味紹介の30秒テンプレを3本つくる',
      '質問→短く答える練習を、固定フレーズで反復する'
    ]
  },
  {
    code: 'A2',
    min: 27,
    max: 43,
    title: '日常会話の入口',
    summary: '身近な話題なら短い会話ができます。定番場面では対応できますが、会話を広げたり維持したりするには、音の基礎と会話の型をもう一段固めると効果的です。',
    actions: [
      '買い物・予約・雑談など、場面別の会話パターンを増やす',
      '1〜2分の英語独り言で、今日の出来事を順番に話す',
      '聞き取れない時の確認フレーズを先に覚えて実戦投入する'
    ]
  },
  {
    code: 'B1',
    min: 44,
    max: 67,
    title: '旅行・仕事の基本会話',
    summary: '日常・旅行・仕事の基本的な話題なら、自分の経験や考えをある程度つなげて話せます。会話は成立しますが、初見話題や速い応酬では負荷が上がりやすい段階です。',
    actions: [
      '理由・比較・例示をセットで話す3点話法を練習する',
      '5分会話を前提に、話題ごとのキーワード帳をつくる',
      '英語音声を「要点メモ→口頭要約」までつなげる'
    ]
  },
  {
    code: 'B2',
    min: 68,
    max: 81,
    title: '自然な実務会話',
    summary: '標準的な速さの会話や議論をかなり追えます。仕事や学習の場でも意見交換がしやすく、相手と自然にやりとりしながら会話を広げられる段階です。',
    actions: [
      '抽象テーマについて、賛成・反対の両面を2分ずつ話す',
      '映画・会議音声で、含意や話者の姿勢まで言語化する',
      '言い換え・言い直しを意識した即興スピーキングを増やす'
    ]
  },
  {
    code: 'C1',
    min: 82,
    max: 93,
    title: '説得・議論までこなせる',
    summary: '抽象度の高い話題でも、論点を整理しながら流暢に話せます。会議・議論・交渉でも、表現を選び分けて相手に伝わる形へ調整しやすい段階です。',
    actions: [
      '専門テーマを3分で説明→1分で要約する練習を行う',
      'アクセント差のある音声を使い、聞き返しなしで要旨確認する',
      '説得・合意形成の表現を増やし、会話主導の練習をする'
    ]
  },
  {
    code: 'C2',
    min: 94,
    max: 100,
    title: '高度で自在な運用',
    summary: '複雑な内容や微妙なニュアンスまで扱いながら、会話・議論・説明を柔軟に運用できます。相手や文脈に応じて、表現の精度と自然さを高い水準で保てる段階です。',
    actions: [
      '専門外テーマでも即興で論点整理する練習を継続する',
      '微妙な含意・ユーモア・含みを含む音声を分析して再現する',
      '英語での交渉・司会・フィードバックなど高負荷場面を増やす'
    ]
  }
];

const sectionLabels = {
  listening: 'リスニング理解',
  interaction: '会話のやりとり',
  production: '流暢さ・説明力',
  flexibility: '言い換え・柔軟さ',
  evidence: '実績・外部エビデンス'
};

const form = document.getElementById('quizForm');
const questionContainer = document.getElementById('questionContainer');
const resultPanel = document.getElementById('resultPanel');
const resultPlaceholder = document.getElementById('resultPlaceholder');
const resultContent = document.getElementById('resultContent');
const resetBtn = document.getElementById('resetBtn');
const copyBtn = document.getElementById('copyBtn');

function renderQuestions() {
  questionContainer.innerHTML = '';

  sections.forEach((section) => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'section-card';
   sectionEl.innerHTML = `
  <div class="section-title">
    <h3>${section.title}</h3>
  </div>
`;


    section.questions.forEach((question) => {
      const qEl = document.createElement('div');
      qEl.className = 'question-block';

      const optionsHtml = question.options.map((option) => `
        <label class="option-card">
          <input type="radio" name="${question.id}" value="${option.value}">
          <span>${option.label}</span>
        </label>
      `).join('');

      qEl.innerHTML = `
        <div class="question-title">${question.title}</div>
        <div class="option-grid">${optionsHtml}</div>
      `;
      sectionEl.appendChild(qEl);
    });

    questionContainer.appendChild(sectionEl);
  });

  const evidenceSection = document.createElement('section');
  evidenceSection.className = 'section-card';
  evidenceSection.innerHTML = `
    <div class="section-title">
  <h3>領域5-B：英語試験の実績（任意）</h3>
</div>

    <div class="evidence-box">
      <div class="select-grid">
        <div class="select-field">
          <label for="ieltsSelect">IELTS Overall</label>
          <select id="ieltsSelect" name="ielts">${buildSelectOptions(testMappings.ielts)}</select>
          <div class="muted-small">公式換算は厳密な1対1対応ではないため、補助証拠として使います。</div>
        </div>
        <div class="select-field">
          <label for="toeicLrSelect">TOEIC Listening & Reading</label>
          <select id="toeicLrSelect" name="toeiclr">${buildSelectOptions(testMappings.toeiclr)}</select>
          <div class="muted-small">会話直結ではないため、加点はやや控えめです。</div>
        </div>
        <div class="select-field">
          <label for="toeicSwSelect">TOEIC Speaking</label>
          <select id="toeicSwSelect" name="toeicsw">${buildSelectOptions(testMappings.toeicsw)}</select>
          <div class="muted-small">話す力により近いので、会話診断との相性が高い指標です。</div>
        </div>
        <div class="select-field">
          <label for="toeflSelect">TOEFL iBT</label>
          <select id="toeflSelect" name="toefl">${buildSelectOptions(testMappings.toefl)}</select>
          <div class="muted-small">学術用テストなので、会話力判定では補助証拠として扱います。</div>
        </div>
        <div class="select-field">
          <label for="versantSelect">VERSANT</label>
          <select id="versantSelect" name="versant">${buildSelectOptions(testMappings.versant)}</select>
          <div class="muted-small">発話中心の指標として、会話診断との整合性が高い補助証拠です。</div>
        </div>
        <div class="select-field">
          <label for="eikenSelect">英検</label>
          <select id="eikenSelect" name="eiken">${buildSelectOptions(testMappings.eiken)}</select>
          <div class="muted-small">4技能の総合的な英語運用力の補助証拠として扱います。</div>
        </div>
      </div>
    </div>
  `;

  questionContainer.appendChild(evidenceSection);
}

function buildSelectOptions(list) {
  return list.map((item) => `<option value="${item.value}">${item.label}</option>`).join('');
}

function getSelectedValue(name) {
  const selected = form.querySelector(`input[name="${name}"]:checked`);
  return selected ? Number(selected.value) : null;
}

function calculateSectionScore(section) {
  const values = section.questions.map((q) => getSelectedValue(q.id));
  if (values.some((v) => v === null)) return null;
  const rawTotal = values.reduce((sum, value) => sum + value, 0);
  const maxRaw = section.questions.length * 5;
  const ratio = rawTotal / maxRaw;
  return Math.round(Math.pow(ratio, 1.4) * 20);
}

function getTestEvidenceScore() {
  const picks = Object.entries(testMappings).map(([key, mapping]) => {
    const value = form.elements[key]?.value || 'none';
    return mapping.find((item) => item.value === value)?.score ?? 0;
  });
  return Math.max(...picks, 0);
}

function validateForm() {
  const missing = [];
  sections.forEach((section) => {
    section.questions.forEach((question) => {
      if (getSelectedValue(question.id) === null) {
        missing.push(question.title);
      }
    });
  });
  return missing;
}

function findLevelByCode(code) {
  return levels.find((level) => level.code === code) || levels[0];
}

function findLevel(score) {
  return levels.find((level) => score >= level.min && score <= level.max) || levels[0];
}

function applyStrictLevelCap(baseLevel, sectionScores, evidenceScore) {
  const core = [sectionScores.listening, sectionScores.interaction, sectionScores.production, sectionScores.flexibility];
  let finalCode = baseLevel.code;

  if (['B2', 'C1', 'C2'].includes(finalCode)) {
    const enoughForB2 = core.every((score) => score >= 12) && core.filter((score) => score >= 14).length >= 2;
    if (!enoughForB2) finalCode = 'B1';
  }

  if (['C1', 'C2'].includes(finalCode)) {
    const enoughForC1 = core.every((score) => score >= 15) && core.filter((score) => score >= 16).length >= 2 && evidenceScore >= 12;
    if (!enoughForC1) finalCode = 'B2';
  }

  if (finalCode === 'C2') {
    const enoughForC2 = core.every((score) => score >= 18) && evidenceScore >= 16;
    if (!enoughForC2) finalCode = 'C1';
  }

  return findLevelByCode(finalCode);
}

function getSectionInsights(scores) {
  const sortable = Object.entries(scores)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => b.value - a.value);

  return {
    strongest: sortable.slice(0, 2),
    weakest: sortable.slice(-2).reverse()
  };
}

function buildStrengthMessages(strongest) {
  return strongest.map(({ key, value }) => {
    if (key === 'listening') return `聞き取りの安定感が比較的高く、自然な会話の要点をつかみやすいです（${value}/20）。`;
    if (key === 'interaction') return `会話の往復が比較的得意で、相手に合わせてやりとりを続けやすいです（${value}/20）。`;
    if (key === 'production') return `考えをまとまりある英語として出す力が比較的強いです（${value}/20）。`;
    if (key === 'flexibility') return `言い換え・抽象化・ニュアンス調整に強みがあります（${value}/20）。`;
    return `実務経験や外部指標が、会話力の裏づけになっています（${value}/20）。`;
  });
}

function needsPronunciationFoundation(sectionScores) {
  const pronunciationRaw = getSelectedValue('p4');
  return pronunciationRaw <= 1 || (pronunciationRaw <= 2 && (sectionScores.listening <= 10 || sectionScores.production <= 10)) || (sectionScores.listening <= 8 && sectionScores.production <= 8);
}

function buildImproveMessages(weakest, pronunciationFlag) {
  const messages = weakest.map(({ key, value }) => {
    if (key === 'listening') return `聞く量だけでなく、「要点を言い返す」練習を増やすと伸びやすいです（現在 ${value}/20）。`;
    if (key === 'interaction') return `質問を返す・確認する・つなぐ表現を増やすと会話継続力が上がります（現在 ${value}/20）。`;
    if (key === 'production') return `1分→2分→3分と長さを決めたスピーキング練習が効果的です（現在 ${value}/20）。`;
    if (key === 'flexibility') return `言い換え・抽象テーマ・トーン調整を意識すると一段上がりやすいです（現在 ${value}/20）。`;
    return `実戦量または外部エビデンスがまだ少ないため、継続使用の機会を増やすと判定が安定します（現在 ${value}/20）。`;
  });

  if (pronunciationFlag) {
    messages.unshift('まずは発声と音声（IPA）から整える優先度が高いです。音の区別・強勢・リズムが不安定だと、聞く力と話す力の両方が伸びにくくなります。');
  }

  return [...new Set(messages)].slice(0, 4);
}

function getTailoredActions(level, sectionScores, pronunciationFlag) {
  const actions = [...level.actions];

  if (pronunciationFlag) {
    actions.unshift('最初の4〜6週間は、発声と音声（IPA）を優先してください。母音・子音・強勢・弱形・連結を、耳と口をセットで毎日短時間反復するのが有効です。');
    actions.unshift('minimal pairs（ship/sheep, live/leave など）と音読録音を使い、「聞き分け→真似る→録音比較」の順で練習してください。');
  }

  if (sectionScores.listening <= 10) {
    actions.push('短い英語音声を1文ずつ止め、スクリプト確認前に自力で復唱する練習を入れてください。');
  }

  if (sectionScores.flexibility <= 10) {
    actions.push('1つの内容を「やさしい英語で言い換える」練習を入れ、言い換え耐性を上げてください。');
  }

  return [...new Set(actions)].slice(0, 5);
}

function buildLogicSummary(level, score, mandatoryScores, realWorldScore, testScore, evidenceScore, cappedFrom) {
  const sourceText = evidenceScore === realWorldScore && evidenceScore >= testScore
    ? '「実際の使用実績」スコアを採用しました'
    : testScore > 0
      ? '任意入力の試験実績を参考採用しました'
      : '試験未入力のため「実際の使用実績」スコアを採用しました';

  const capText = cappedFrom && cappedFrom !== level.code
    ? ` なお、自己評価の甘さを抑えるため、B2以上は全コア領域で一定水準を満たす場合のみ認定する設計にしており、暫定判定 ${cappedFrom} から ${level.code} に調整しています。`
    : ' B2以上は、総合点だけでなく全コア領域で一定以上の安定性がある場合にのみ認定します。';

  return `総合スコアは ${score} / 100 点です。必須4領域（リスニング・会話のやりとり・流暢さ/説明力・言い換え/柔軟さ）の合計 ${mandatoryScores} 点に、実績エビデンス領域 ${evidenceScore} 点を加算して判定しています。証拠領域は ${sourceText}。${capText} この結果、推定レベルは ${level.code}（${level.title}）です。`;
}

function renderBars(scores) {
  const barsContainer = document.getElementById('barsContainer');
  barsContainer.innerHTML = '';

  Object.entries(scores).forEach(([key, value]) => {
    const item = document.createElement('div');
    item.className = 'bar-item';
    item.innerHTML = `
      <div class="bar-item__header">
        <span>${sectionLabels[key]}</span>
        <span>${value} / 20</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${(value / 20) * 100}%"></div></div>
    `;
    barsContainer.appendChild(item);
  });
}

function renderResults(payload) {
  const { level, totalScore, sectionScores, logicSummary, actionItems, improveItems } = payload;

  resultPlaceholder.classList.add('hidden');
  resultContent.classList.remove('hidden');

  document.getElementById('levelCode').textContent = level.code;
  document.getElementById('friendlyLevel').textContent = level.title;
  document.getElementById('levelSummary').textContent = level.summary;
  document.getElementById('totalScore').textContent = totalScore;
  document.getElementById('logicSummary').textContent = logicSummary;

  renderBars(sectionScores);

  const insights = getSectionInsights(sectionScores);
  document.getElementById('strengthList').innerHTML = buildStrengthMessages(insights.strongest)
    .map((text) => `<li>${text}</li>`).join('');

  const improveList = improveItems && improveItems.length ? improveItems : buildImproveMessages(insights.weakest, false);
  document.getElementById('improveList').innerHTML = improveList.map((text) => `<li>${text}</li>`).join('');

  const actions = actionItems && actionItems.length ? actionItems : level.actions;
  document.getElementById('actionList').innerHTML = actions.map((text) => `<li>${text}</li>`).join('');

  localStorage.setItem('englishLevelDiagnosis', JSON.stringify(payload));
}

function showError(message) {
  removeError();
  const banner = document.createElement('div');
  banner.className = 'error-banner';
  banner.id = 'errorBanner';
  banner.textContent = message;
  form.prepend(banner);
}

function removeError() {
  const existing = document.getElementById('errorBanner');
  if (existing) existing.remove();
}

function handleSubmit(event) {
  event.preventDefault();
  removeError();

  const missing = validateForm();
  if (missing.length) {
    showError('未回答の質問があります。すべての必須質問に回答してから診断してください。');
    return;
  }

  const listeningScore = calculateSectionScore(sections[0]);
  const interactionScore = calculateSectionScore(sections[1]);
  const productionScore = calculateSectionScore(sections[2]);
  const flexibilityScore = calculateSectionScore(sections[3]);
  const realWorldScore = calculateSectionScore(sections[4]);
  const testScore = getTestEvidenceScore();
  const evidenceScore = Math.max(realWorldScore, testScore);

  const mandatoryScores = listeningScore + interactionScore + productionScore + flexibilityScore;
  const totalScore = mandatoryScores + evidenceScore;
  const preliminaryLevel = findLevel(totalScore);

  const sectionScores = {
    listening: listeningScore,
    interaction: interactionScore,
    production: productionScore,
    flexibility: flexibilityScore,
    evidence: evidenceScore
  };

  const finalLevel = applyStrictLevelCap(preliminaryLevel, sectionScores, evidenceScore);
  const pronunciationFlag = needsPronunciationFoundation(sectionScores);
  const insights = getSectionInsights(sectionScores);

  const payload = {
    level: finalLevel,
    totalScore,
    sectionScores,
    logicSummary: buildLogicSummary(finalLevel, totalScore, mandatoryScores, realWorldScore, testScore, evidenceScore, preliminaryLevel.code),
    actionItems: getTailoredActions(finalLevel, sectionScores, pronunciationFlag),
    improveItems: buildImproveMessages(insights.weakest, pronunciationFlag),
    pronunciationFlag
  };

  renderResults(payload);
  resultPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetAll() {
  form.reset();
  removeError();
  resultContent.classList.add('hidden');
  resultPlaceholder.classList.remove('hidden');
  localStorage.removeItem('englishLevelDiagnosis');
}

function copyResult() {
  const saved = localStorage.getItem('englishLevelDiagnosis');
  if (!saved) return;
  const data = JSON.parse(saved);
  const text = [
    '英会話レベル診断の結果',
    `推定レベル: ${data.level.code} / ${data.level.title}`,
    `総合スコア: ${data.totalScore} / 100`,
    data.level.summary,
    data.pronunciationFlag ? '学習提案: 発声と音声（IPA）から始める優先度が高いです。' : '',
    data.logicSummary
  ].filter(Boolean).join('\n');

  navigator.clipboard.writeText(text)
    .then(() => {
      copyBtn.textContent = 'コピーしました';
      setTimeout(() => { copyBtn.textContent = '結果をコピー'; }, 1800);
    })
    .catch(() => {
      copyBtn.textContent = 'コピー失敗';
      setTimeout(() => { copyBtn.textContent = '結果をコピー'; }, 1800);
    });
}

function restoreLastResult() {
  const saved = localStorage.getItem('englishLevelDiagnosis');
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    renderResults(data);
  } catch (_) {
    localStorage.removeItem('englishLevelDiagnosis');
  }
}

renderQuestions();
restoreLastResult();
form.addEventListener('submit', handleSubmit);
resetBtn.addEventListener('click', resetAll);
copyBtn.addEventListener('click', copyResult);
