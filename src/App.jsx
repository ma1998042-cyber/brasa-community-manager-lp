import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CaretDown,
  ChatCircleDots,
  Check,
  Clock,
  Fire,
  List,
  PresentationChart,
  Sparkle,
  TrendUp,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const outcomes = [
  {
    number: "01",
    image: "/images/outcome-01-lasting-community.jpg",
    title: "続く場の設計",
    text: "一時的な盛り上がりで終わらず、参加者同士の関係と会話が自然に続くコミュニティを設計できる。",
  },
  {
    number: "02",
    image: "/images/outcome-02-daily-operations.jpg",
    title: "日々の運営実務",
    text: "投稿、イベント、声かけ、フォローを思いつきではなく、再現できる運営の型として身につける。",
  },
  {
    number: "03",
    image: "/images/outcome-03-ai-efficiency.jpg",
    title: "AIで効率化",
    text: "リサーチ・文章作成・参加状況の分析・レポートまで、AIを運営の相棒として使いこなせる。",
  },
  {
    number: "04",
    image: "/images/outcome-04-support-career.jpg",
    title: "支えるキャリア",
    text: "自分の場を育てるだけでなく、オーナーの想いを理解し、運営パートナーとして伴走できる。",
  },
];

const reasons = [
  {
    number: "01",
    image: "/images/reason-01-online-salon.jpg",
    label: "ONLINE SALON",
    title: "オンラインサロン運営に特化",
    text: "「コミュニティ全般」ではなく、月額制オンラインサロンの運営実務に焦点を絞ります。入会後のオンボーディング、日々の投稿、イベント、会員フォローまで、継続率を支える一連の仕事を具体的に学びます。",
    points: ["月額制コミュニティの運営導線", "参加者が自然に関われる仕掛け", "在宅・副業でも回せる業務設計"],
  },
  {
    number: "02",
    image: "/images/reason-02-ai-operation.jpg",
    label: "AI OPERATIONS",
    title: "AIを、運営の相棒にする",
    text: "ChatGPTやClaude Codeを、投稿を量産するだけの道具ではなく、場を理解して次の一手をつくる相棒として活用します。ChatGPTでは投稿ネタ・イベント企画・参加者の声の整理・レポートの下書きを作成。Claude Codeではデータや資料の整理、告知ページ・デザイン案・複数ファイルの制作を効率化します。AIが下書きをつくり、人が場の文脈と温度に合わせて仕上げる方法を、実際のケースを想定したワークで学びます。",
    points: ["ChatGPTで投稿案・企画・分析を支援", "Claude Codeでデータ整理・資料やページ制作を効率化", "AIの出力を人が判断し、場に合わせて仕上げる"],
  },
  {
    number: "03",
    image: "/images/reason-03-field-practice.jpg",
    label: "FIELD PRACTICE",
    title: "座学より、現場で手を動かす",
    text: "知識を覚えるだけでは、場の空気は読めません。実際に動いているコミュニティを題材に、投稿、声かけ、イベント設計、振り返りまでを実践。反応を見ながら改善する経験が、卒業後の自信になります。",
    points: ["現場を想定した実践課題", "講義とワークを毎月往復", "成果物はポートフォリオに"],
  },
  {
    number: "04",
    image: "/images/reason-04-owner-mentoring.jpg",
    label: "OWNER MENTORING",
    title: "現役オーナーが、直接フィードバック",
    text: "教えるのは、今もコミュニティを運営し、日々の迷いや変化に向き合っている現役オーナーです。教科書の正解ではなく、その場の目的と参加者に合わせて判断する視点を、具体的な添削と対話でお渡しします。",
    points: ["現場視点の個別フィードバック", "オーナーの意図を汲む練習", "失敗事例も含めた実務知"],
  },
  {
    number: "05",
    image: "/images/reason-05-after-graduation.jpg",
    label: "AFTER GRADUATION",
    title: "卒業後も、実践につながる",
    text: "3ヶ月で終わる資格講座ではありません。運営ポートフォリオを仕上げ、適性のある方には支援コミュニティでの実践機会をご案内。学んだことを現場で試し、支えるキャリアへつなげるところまで伴走します。",
    points: ["運営ポートフォリオを制作", "適性に応じた実践機会の案内", "卒業後もつながる運営者ネットワーク"],
  },
];

const curriculum = [
  {
    month: "1ヶ月目",
    theme: "土台をつくる",
    purpose: "場の目的と運営者の役割を理解し、続くコミュニティの設計図をつくる。",
    lessons: ["コミュニティの本質と「文脈」の捉え方", "続く場・止まる場の運営診断", "オーナー／参加者／運営者の役割整理", "AIを使ったリサーチと運営準備"],
    output: "コミュニティ運営設計シート",
  },
  {
    month: "2ヶ月目",
    theme: "現場で動かす",
    purpose: "投稿・イベント・声かけを実践し、参加者の反応から改善できるようになる。",
    lessons: ["1ヶ月分の投稿・企画カレンダー作成", "参加したくなるオンラインイベント設計", "初参加者へのオンボーディングと声かけ", "インタビュー／アンケート設計とAI分析"],
    output: "実践運営プラン＋投稿・イベント案",
  },
  {
    month: "3ヶ月目",
    theme: "任される人になる",
    purpose: "実践結果を数字と言葉で伝え、オーナーに次の一手を提案できる状態を目指す。",
    lessons: ["運営データ・継続率・参加率の見方", "イベントレポートと改善提案", "実際のコミュニティを想定した運営演習", "案件の進め方・見積り・卒業後のキャリア"],
    output: "運営ポートフォリオ＋改善提案書",
  },
];

const faqs = [
  ["コミュニティ運営の経験がなくても大丈夫ですか？", "はい。未経験の方を前提に、基本設計から現場での実践まで順番に進めます。"],
  ["副業でも続けられますか？", "オンライン中心の設計です。働きながらでも無理なく実践できるよう、課題の進め方を個別に調整します。"],
  ["1週間にどのくらい学習時間が必要ですか？", "講義・ワークを含め、週3〜5時間が目安です。実践期間はご自身の予定に合わせて進められます。"],
  ["AIツールを使ったことがなくても大丈夫ですか？", "問題ありません。基本操作から、投稿・分析・レポートに使う具体的な手順まで扱います。"],
  ["卒業したら必ず仕事がもらえますか？", "仕事を保証する講座ではありません。適性と希望が合う方には、運営支援の実践機会をご案内します。"],
  ["自分のコミュニティを持ちたい場合も対象ですか？", "はい。支える側の視点を学ぶことで、ご自身のコミュニティを無理なく続ける設計にも活かせます。"],
];

function CTAButton({ compact = false }) {
  return (
    <a className={`cta-button ${compact ? "compact" : ""}`} href="#entry">
      <span>無料説明会に参加する</span>
      <ArrowRight weight="bold" />
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Brasa トップへ">
          <Fire weight="fill" />
          <span className="brand-name">Brasa</span>
          <span className="brand-ja">ブラーサ</span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="メインナビゲーション">
          <a href="#about" onClick={() => setMenuOpen(false)}>講座について</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>選ばれる理由</a>
          <a href="#curriculum" onClick={() => setMenuOpen(false)}>カリキュラム</a>
          <a href="#price" onClick={() => setMenuOpen(false)}>料金</a>
          <CTAButton compact />
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <List />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="hero-topline"><span>3ヶ月・実践型オンライン講座</span><i /></div>
            <p className="course-name">コミュニティマネージャー養成講座</p>
            <h1>場の<em>熱</em>を、絶やさない人に。</h1>
            <h2>資格より、<strong>現場</strong>で動けること。</h2>
            <p className="hero-lead">実際のコミュニティ運営とAI活用を通して、<br />続く場を支える実務を学びます。</p>
            <div className="hero-usps">
              <div><UsersThree /><span>実際の現場で実践</span></div>
              <div><TrendUp /><span>投稿・分析を<br />AIで効率化</span></div>
              <div><CalendarCheck /><span>未経験から3ヶ月</span></div>
            </div>
            <div className="proof-row">
              <span><b>150</b>名以上<small>の運営</small></span>
              <span><b>50</b>件以上<small>の相談実績</small></span>
            </div>
            <CTAButton />
            <p className="cta-note">まずはオンラインで話を聞く</p>
          </div>
          <div className="hero-visual">
            <img src="/images/brasa-hero.jpg" alt="オンラインコミュニティを進行する女性" />
            <div className="brush-badge">現場第一主義</div>
            <div className="ember-ring" aria-hidden="true" />
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="section-heading centered">
            <span className="eyebrow">ABOUT BRASA</span>
            <h2>ブラーサは、<br /><em>場の火を絶やさない人</em>を育てる学校です。</h2>
          </div>
          <div className="intro-grid">
            <div className="ember-card"><Fire weight="fill" /><strong>Brasa</strong><span>燃え続ける炭火</span></div>
            <div className="intro-copy">
              <p className="large-copy">コミュニティは、最初の炎では決まりません。</p>
              <p>盛大なローンチで人が集まっても、炎はやがて小さくなる。本当に大事なのは、そのあとも場が温かく燃え続けているかどうか。</p>
              <p>ブラーサ（Brasa）は、スペイン・ポルトガル語で「燃え続ける炭火」。参加者が心地よくいられる温度を守り、オーナーの想いを日々の体験に変える人を育てます。</p>
              <div className="philosophy-pills"><span>規模より、継続を。</span><span>人脈より、文脈を。</span><span>主役は、場にいる人。</span></div>
            </div>
          </div>
        </section>

        <section className="why-now section" id="why-now">
          <div className="why-now-layout">
            <div className="why-now-heading">
              <span className="eyebrow light">WHY COMMUNITY, WHY NOW?</span>
              <h2>なぜ今、<br /><em><span>コミュニティ</span><span>マネージャー</span></em><span className="why-now-tail">なのか。</span></h2>
              <p>AIが情報をつくる時代。価値の中心は、情報の量から「誰と、どんな時間を積み重ねるか」へ移っています。</p>
            </div>
            <div className="why-now-flow" aria-label="コミュニティマネージャーが求められる時代変化">
              {[
                [<Sparkle weight="fill" />, "①", "AIで情報があふれる", "文章・画像・ノウハウを、誰もが短時間でつくれるように。情報だけでは差がつきにくくなります。"],
                [<UsersThree weight="fill" />, "②", "価値が「情報」から「体験」へ移る", "調べればわかることの価値は下がり、誰かと一緒に考え、悩み、進んだ時間そのものが価値になります。"],
                [<TrendUp weight="bold" />, "③", "コミュニティが増えていく", "企業も個人も、顧客・学習・ファンのための小さな場を持ちやすくなり、運営の需要が広がります。"],
                [<ChatCircleDots weight="fill" />, "④", "続ける人が足りなくなる", "投稿、イベント、声かけ、フォロー、改善。日々の運営を担い、場の温度を守る人材が不足します。"],
              ].map(([icon, number, title, text]) => (
                <article key={number}>
                  <div className="why-now-marker">
                    <span>{number}</span>
                    <div className="why-now-icon">{icon}</div>
                  </div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className="why-now-conclusion">
            <div>
              <span>COMMUNITY MANAGER</span>
              <h3>つくる人が増えるほど、<br /><em>続ける人</em>が足りなくなる。</h3>
            </div>
            <p>コミュニティマネージャーは、オーナーの想いと参加者の声をつなぎ、投稿・イベント・フォロー・改善を回す専門職。場が増える今、その役割がこれまで以上に求められています。</p>
          </div>
        </section>

        <section className="outcomes section">
          <div className="section-heading centered">
            <span className="eyebrow">IDEAL FUTURE / AFTER 3 MONTHS</span>
            <h2>知っている、から。<br /><em>現場で動ける</em>へ。</h2>
            <p className="section-lead">3ヶ月後、場の状態を見て、自分で考え、次の一手を動かせる状態を目指します。</p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((item) => (
              <article key={item.number}>
                <img src={item.image} alt={`${item.title}をイメージする実務風景`} />
                <div><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="problems section section-dark">
          <div className="section-heading centered">
            <span className="eyebrow light">COMMUNITY OWNER'S REALITY</span>
            <h2>コミュニティ運営者は、<br /><em>こんな課題</em>を抱えています。</h2>
            <p className="section-lead light-copy">場をつくったのに、続けるほど運営の負担が増えていく。多くのオーナーや担当者が、日々の細かな仕事を一人で抱えています。</p>
          </div>
          <div className="problems-layout">
            <div className="problem-owner">
              <img src="/images/outcome-02-daily-operations.jpg" alt="コミュニティ運営の業務を一人で抱える女性" />
              <div>
                <span>コミュニティ運営者の声</span>
                <blockquote>「場を育てたい。でも、企画も告知もフォローも、全部ひとりでは回らない。」</blockquote>
              </div>
            </div>
            <div className="problem-grid">
              {[
                ["投稿のネタが尽きる", "何を発信すればいいか分からず、更新が止まるたびに運営者だけが焦ってしまう。"],
                ["イベントが単発で終わる", "開催しても、その後の会話や参加者同士の関係づくりまで手が回らない。"],
                ["新しい人が入りづらい", "いつもの人だけが反応し、初参加者への声かけやフォローが後回しになる。"],
                ["業務が一人に集中する", "企画・告知・進行・会員対応をオーナーや担当者がすべて抱えてしまう。"],
                ["改善の判断ができない", "参加率や反応を振り返れず、場をよくするための次の一手を決められない。"],
              ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="solution section">
          <div className="solution-image"><img src="/images/brasa-field-workshop.jpg" alt="コミュニティ運営を学び、話し合う受講者" /></div>
          <div className="solution-copy">
            <span className="eyebrow">THE SOLUTION</span>
            <h2>必要なのは、<br /><em>場を支える専門職。</em></h2>
            <p>コミュニティマネージャーは、ただ投稿する人でも、イベントを仕切る人でもありません。オーナーの想いと参加者の声をつなぎ、関わりが続く文脈を設計する人です。</p>
            <p>ブラーサでは、知識・AI・現場実践を一つにして、その役割を3ヶ月で身につけます。</p>
          </div>
        </section>

        <section className="reasons section" id="features">
          <div className="section-heading centered">
            <span className="eyebrow">WHY BRASA</span>
            <h2>ブラーサが選ばれる、<br /><em>5つの理由。</em></h2>
          </div>
          <div className="reason-features">
            {reasons.map((item) => (
              <article className="reason-feature" key={item.number}>
                <div className="reason-feature-image"><img src={item.image} alt={`${item.title}を表す実践風景`} /></div>
                <div className="reason-feature-copy">
                  <div className="reason-kicker"><b>{item.number}</b><span>{item.label}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>{item.points.map((point) => <li key={point}><Check weight="bold" />{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="curriculum section" id="curriculum">
          <div className="section-heading centered">
            <span className="eyebrow light">CURRICULUM</span>
            <h2>3ヶ月で、<br />任される人になる。</h2>
            <p className="section-lead light-copy">毎月「理解する → 手を動かす → 反応を見る → 改善する」を繰り返します。</p>
          </div>
          <div className="curriculum-table-wrap">
            <table className="curriculum-table">
              <thead><tr><th>期間</th><th>テーマ・ゴール</th><th>具体的に取り組むこと</th><th>成果物</th></tr></thead>
              <tbody>
                {curriculum.map((item) => (
                  <tr key={item.month}>
                    <th><span>{item.month}</span></th>
                    <td><h3>{item.theme}</h3><p>{item.purpose}</p></td>
                    <td><ul>{item.lessons.map((lesson) => <li key={lesson}><Check weight="bold" />{lesson}</li>)}</ul></td>
                    <td><strong>{item.output}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="curriculum-note"><Sparkle weight="fill" /> すべての月で、講義と現場ワークを行き来します。</p>
        </section>

        <section className="authority section">
          <div className="authority-copy">
            <span className="eyebrow">OPERATED BY AI DOCKS</span>
            <h2>「作る」だけでなく、<br /><em>「続ける」</em>を知る会社。</h2>
            <p>AI Docksは、コミュニティの立ち上げ・運営支援、スクール運営、メディア運営を行う会社です。自社でも月額制コミュニティを運営し、参加者の温度、継続、運営負荷という現場の課題に向き合い続けています。</p>
            <p>講座で扱うのは、資料上の理論ではなく、実際の相談と運営から磨いた方法です。</p>
            <div className="trust-tags"><span>現役コミュニティオーナー</span><span>AI運営を実装</span><span>ZEN大学 特別講義</span></div>
          </div>
          <div className="stats-grid">
            <div><strong>150<span>名+</span></strong><p>自社オンラインコミュニティを運営</p></div>
            <div><strong>50<span>件+</span></strong><p>コミュニティ運営の相談実績</p></div>
            <div><strong>200<span>名+</span></strong><p>スクール・講座での指導実績</p></div>
            <div><strong>100<span>回+</span></strong><p>ウェビナー・セミナーの開催実績</p></div>
          </div>
        </section>

        <section className="fit-section fit-good section">
          <div className="fit-visual"><img src="/images/outcome-04-support-career.jpg" alt="オンラインでコミュニティを支える女性" /></div>
          <div className="fit-copy">
            <span className="eyebrow">RECOMMENDED</span>
            <h2>こんな人に向いています</h2>
            {["副業でコミュニティ運営に関わりたい", "場づくり・人のつながりに関心がある", "会社でコミュニティ担当になった", "AIを活用した新しい運営方法を学びたい"].map((text) => <p key={text}><Check weight="bold" />{text}</p>)}
          </div>
        </section>

        <section className="fit-section fit-not section">
          <div className="fit-copy">
            <span className="eyebrow">NOT FOR YOU</span>
            <h2>この講座が向いていない人</h2>
            {["短期で大きく稼ぐことだけが目的の方", "人と関わらず、知識だけを受け取りたい方", "手を動かす実践に時間を割けない方"].map((text) => <p key={text}><X weight="bold" />{text}</p>)}
            <div className="fit-note">場づくりは、すぐに結果が出る仕事ではありません。相手を見て、小さく試し、続ける姿勢を大切にしています。</div>
          </div>
          <div className="fit-visual"><img src="/images/reason-03-field-practice.jpg" alt="実践課題に向き合う受講者" /></div>
        </section>

        <section className="price section" id="price">
          <div className="price-card">
            <div className="price-head"><span>3ヶ月 実践型プログラム</span><h2>受講料金</h2></div>
            <div className="price-value"><span>税込</span><strong>298,000</strong><b>円</b></div>
            <div className="price-includes">
              <span><Check weight="bold" />全カリキュラム</span><span><Check weight="bold" />現場での実践演習</span>
              <span><Check weight="bold" />AI活用ワーク</span><span><Check weight="bold" />卒業後の機会案内</span>
            </div>
            <CTAButton />
            <p>仕事のご案内は適性に応じたもので、保証ではありません。</p>
          </div>
        </section>

        <section className="benefits section">
          <div className="section-heading centered">
            <span className="eyebrow">FREE CONSULTATION BENEFITS</span>
            <h2>無料説明会への参加で、<br /><em>3つの特典</em>をお渡しします。</h2>
          </div>
          <div className="benefit-grid">
            {[
              ["/images/bonus-01-start-guide.jpg", "01", "コミュニティ運営スタートガイド", "続く場をつくる基本の型を、すぐに見返せる実践ガイド。"],
              ["/images/bonus-02-ai-prompts.jpg", "02", "運営で使えるAIプロンプト集", "投稿・リサーチ・分析・振り返りを効率化するテンプレート。"],
              ["/images/bonus-03-fit-diagnosis.jpg", "03", "適性・コミュニティ個別診断", "経験や希望を伺い、あなたに合った関わり方を一緒に整理。"],
            ].map(([image, number, title, text]) => (
              <article key={number}><img src={image} alt={`${title}のイメージ`} /><div><span>{number}</span><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
          <p className="soft-note">無理な勧誘は行いません。適性がないと感じた場合は、正直にお伝えします。</p>
        </section>

        <section className="representative section">
          <div className="representative-photo"><img src="/images/matsunaga-yuki.jpg" alt="株式会社AI Docks 代表取締役 松永勇樹" /></div>
          <div className="representative-copy">
            <span className="eyebrow">MESSAGE FROM THE FOUNDER</span>
            <h2>コミュニティづくりは、<br /><em>文脈づくり。</em></h2>
            <p>AIが情報をつくる時代、コミュニティの価値は「情報量」ではなく、誰と何を積み重ねてきたかという文脈にあります。</p>
            <p>ただ、場はつくっただけでは続きません。投稿が止まり、参加者同士の関係が薄れ、静かに火が消えていく。だからこそ、運営者の隣で温度を見ながら、その火を絶やさず支え続ける人が必要です。</p>
            <p>ブラーサでは、その役割を知識ではなく現場で身につけてほしい。小さくても、誰かにとって大切な場を続けられる人を増やしたいと思っています。</p>
            <div className="signature"><span>株式会社AI Docks 代表取締役</span><strong>松永 勇樹</strong></div>
          </div>
        </section>

        <section className="faq section">
          <div className="section-heading"><span className="eyebrow">FAQ</span><h2>よくあるご質問</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? "open" : ""} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span><b>Q</b>{question}</span><CaretDown weight="bold" />
                </button>
                <div className="faq-answer"><p><b>A</b>{answer}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="entry section" id="entry">
          <div className="entry-copy">
            <span className="eyebrow light">FREE INFORMATION SESSION</span>
            <h2>場を支える仕事を、<br />あなたの次の一歩に。</h2>
            <p>まずはLINEから無料説明会へ。講座の進め方、現場での実践、あなたに合う関わり方をお話しします。</p>
            <div className="entry-facts"><span><Clock />約60分</span><span><PresentationChart />オンライン開催</span><span><Fire />参加無料</span></div>
          </div>
          <div className="line-entry">
            <ChatCircleDots weight="fill" />
            <p>LINEで友だち追加後、<br /><strong>「説明会」</strong>と送ってください。</p>
            <a className="line-button" href="https://line.me/" target="_blank" rel="noreferrer">
              <ChatCircleDots weight="fill" /><span>LINEで無料説明会に申し込む</span><ArrowRight weight="bold" />
            </a>
            <small>30秒で完了・スマートフォンからも申し込めます</small>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><Fire weight="fill" /><span className="brand-name">Brasa</span><span className="brand-ja">ブラーサ</span></a>
        <p>コミュニティマネージャー養成講座</p>
        <div><a href="#about">講座について</a><a href="#features">選ばれる理由</a><a href="#curriculum">カリキュラム</a><a href="#price">料金</a><a href="#entry">無料説明会</a></div>
        <p className="footer-operator">運営：<a href="https://noxtech.biz/" target="_blank" rel="noreferrer">株式会社AI Docks</a></p>
        <small>© 2026 AI Docks Inc.</small>
      </footer>
    </div>
  );
}
