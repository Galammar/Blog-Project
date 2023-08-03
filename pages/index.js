import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import React from 'react';

export default function Home() {
  let [currentPage, setCurrentPage] = useState('');
  let [viewingArticleID, setViewingArticleID] = useState(1);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  let [anouncements, setAnouncements] = useState([
    {
      title: 'Welcome to <i>"My Awesome Blog"</i>',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc nisl, dictum in laoreet in, rhoncus at massa. Curabitur odio libero, maximus scelerisque lectus eget, consequat interdum libero. Donec sed maximus justo, sit amet faucibus magna. Integer ac quam velit. Maecenas vulputate rutrum pretium. Pellentesque dapibus risus nunc, at imperdiet metus aliquam sed. Nulla in pellentesque metus. Pellentesque lacinia, magna nec eleifend eleifend, velit leo cursus massa, bibendum dictum ligula sem et quam. Nam posuere, sem vitae imperdiet scelerisque, nulla elit hendrerit ligula, eget consequat dolor ante sed metus. Suspendisse aliquet mauris vel tortor dapibus egestas. Donec nec eros in lorem feugiat dictum nec a velit. Nam commodo sem sit amet imperdiet egestas. Donec tellus sem, volutpat eget lacus quis, consectetur vulputate ex. Cras elementum leo euismod metus aliquet fermentum.',
    },
  ]);
  let [library, setLibrary] = useState([
    {
      title: 'Greetings',
      preface: 'Hello World',
      content: 'Hello World!',
      date: '13/7/23',
      id: 1,
    },
    {
      title: 'Lorem Ipsum',
      preface:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dui sed lectus lobortis placerat sed ac diam. Donec turpis velit, scelerisque a tempor vitae, faucibus et dui. Etiam tincidunt velit id magna sagittis, finibus accumsan ante hendrerit. Suspendisse potenti. Vivamus eget ante sodales, placerat leo eget, bibendum metus. Sed id erat id sem vulputate dignissim vel eu ipsum. Etiam ac purus purus. In quis quam ut leo porta porta sed vitae velit. Sed dapibus bibendum lorem eu tristique. Maecenas magna ligula, gravida a tellus id, gravida suscipit dolor. Donec tincidunt nisl eget leo tempor commodo.',
      content:
        '<h2>Header</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus urna, condimentum vitae auctor sit amet, iaculis eu nibh. Nullam rhoncus accumsan ligula eget consequat. Ut felis lacus, fermentum non lacus at, viverra pretium nisi. Donec vel scelerisque felis, sit amet lacinia risus. Nunc et dolor vitae mi viverra sodales. In eget luctus enim, ut facilisis est. Nunc interdum quam ac risus fermentum blandit. Aliquam tempus lectus ac congue fermentum. Duis ornare suscipit finibus. Ut elit turpis, feugiat sed neque sit amet, finibus tempor nisi.</p><p><h3>New Para</h3>In vehicula nisl vel pharetra commodo. Vivamus justo dui, placerat sed arcu ut, accumsan egestas mi. Duis semper non ante non sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dignissim neque ac scelerisque malesuada. Pellentesque efficitur tellus ac convallis sollicitudin. Nunc urna dolor, pellentesque vitae massa nec, porttitor efficitur risus. Sed eget diam mattis augue blandit mollis eget in turpis. Phasellus lacinia magna vitae congue tristique. Ut et porttitor diam. Maecenas in dignissim lacus. Pellentesque quis pulvinar eros. Cras non erat est. In hac habitasse platea dictumst.</p><p><h3>New Para</h3>Donec eget metus ligula. Proin ultrices purus sed ipsum imperdiet egestas. Etiam tempor, lectus rhoncus venenatis pharetra, diam erat tincidunt metus, a commodo neque urna vitae dui. Nunc tempor, ipsum id viverra aliquam, magna nisi dapibus lacus, sit amet gravida felis enim ut augue. Proin id justo ut est consectetur pretium sit amet ac lorem. Integer nunc dolor, luctus at ullamcorper in, porttitor eu mi. Donec consequat scelerisque pharetra. Quisque fringilla nibh nec nisi cursus euismod. Etiam dapibus magna in sagittis lacinia. Proin tincidunt odio sed velit volutpat, eget luctus tellus rhoncus. Pellentesque quis leo id lacus porttitor tempor.</p><p><h3>New Para</h3>Cras tempus ut elit eget iaculis. Cras eu lectus semper ante ornare viverra at quis neque. Duis finibus ac risus sit amet gravida. Nulla a risus vel velit aliquam mollis non ut metus. Phasellus felis ex, facilisis non lectus id, maximus ultricies diam. Donec accumsan tristique augue vel scelerisque. Mauris faucibus quam vitae nibh aliquam viverra. Vivamus sed vulputate justo, ut euismod dui. Phasellus egestas nulla magna, in rhoncus augue cursus et.</p><p><h3>New Para</h3>Aliquam sed aliquam dolor. Curabitur ultricies dui eleifend ipsum viverra pulvinar. Duis commodo nisi non dolor finibus, a ornare nisi condimentum. Aliquam erat volutpat. Duis condimentum quam turpis. Vestibulum at feugiat quam. Maecenas nec dolor tortor. Cras sit amet scelerisque erat, sed congue risus. Aenean pellentesque luctus mi a ultrices. Vestibulum pulvinar feugiat turpis, ac venenatis est vestibulum quis. Nam quis turpis sem.</p><p><h3>New Para</h3>Etiam lacus lacus, finibus at accumsan eget, pellentesque vel purus. Maecenas porttitor imperdiet mollis. Cras sodales pretium faucibus. Sed eget accumsan risus. Proin dignissim risus vitae quam aliquam, vitae lobortis elit lacinia. Quisque rutrum, ipsum a viverra aliquet, sem ligula vestibulum lorem, a bibendum est ante sit amet neque. Proin faucibus semper mi, quis maximus lacus elementum et. In erat enim, suscipit sit amet mi at, lacinia ullamcorper felis. In euismod, purus sed aliquet bibendum, nibh odio porta sapien, vitae pretium mauris mi a ipsum. Aenean pellentesque euismod eros, eu convallis sem. Vivamus mattis vitae purus sed laoreet.</p><p><h3>New Para</h3>Integer in vulputate enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pretium massa eros, id rhoncus purus maximus nec. Proin vestibulum ut lectus sed eleifend. Nunc eu mi ut quam aliquam pulvinar. Fusce ligula tellus, convallis eget semper lobortis, ornare sit amet erat. Suspendisse nec dapibus sapien. Aliquam sollicitudin vel sapien sit amet consectetur. Aliquam ac scelerisque neque, ac sagittis dui. Suspendisse ullamcorper, quam et facilisis fringilla, nisl sem tempus tortor, a fringilla arcu mi in massa. Duis lorem arcu, pretium vitae libero eget, semper faucibus purus.</p><p><h3>New Para</h3>Donec maximus sem lacinia, posuere leo id, euismod ligula. Sed ac posuere tellus, in consequat libero. Duis malesuada augue vel purus facilisis, eu ullamcorper massa ultrices. Nam eleifend aliquet aliquam. Sed porttitor ligula ut tellus dictum, at semper ipsum ultrices. Mauris maximus mi vel massa aliquet, vitae elementum ligula iaculis. Nullam placerat sapien ipsum, ac sodales metus molestie et.</p><p><h3>New Para</h3>Donec commodo libero sit amet nisi commodo, quis rhoncus velit fringilla. Phasellus cursus, dui vel egestas porta, odio nibh eleifend odio, at viverra nulla metus eget urna. Sed nec turpis velit. Proin eget neque condimentum turpis pellentesque semper. Mauris faucibus sed est a scelerisque. Donec sit amet justo viverra, convallis lectus ut, facilisis ante. Donec porttitor turpis quis eros efficitur porttitor ut sit amet mi. Aliquam erat volutpat. Phasellus libero dolor, dictum non malesuada eu, mollis accumsan lectus.</p><p><h3>New Para</h3>Mauris varius mi augue, sit amet efficitur tortor tincidunt sagittis. In luctus, massa quis porta ornare, felis nisl consequat sem, nec vestibulum ligula nisi vulputate est. Vestibulum ac sapien lorem. Maecenas mattis ante vitae sollicitudin sollicitudin. Donec condimentum odio vel diam placerat maximus. Duis porta fringilla purus, nec semper magna pharetra rhoncus. Suspendisse faucibus sapien nisl, id elementum lacus lacinia quis.</p>',
      date: '13/7/23',
      id: 2,
    },
  ]);

  function Article({ title, preface, id }) {
    return (
      <div className={styles.article}>
        <div>
          <h2 className={styles.articleTitle}>{title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: truncateString(preface, 615) }}
          />
          <button
            className={styles.articleButton}
            onClick={() => {
              setViewingArticleID(id);
              setCurrentPage('viewer');
            }}
          >
            {'Read More >'}
          </button>
        </div>
      </div>
    );
  }

  function Diary() {
    return (
      <div className={styles.diary}>
        {library.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            preface={article.preface}
            id={article.id}
          />
        ))}
      </div>
    );
  }

  function NavBar() {
    return (
      <div className={styles.navBar}>
        <span className={styles.navBarElements}>
          <h2 onClick={() => setCurrentPage('home')}>Home</h2>
        </span>
        <span className={styles.navBarElements}>
          <h2 onClick={() => setCurrentPage('articles')}>Articles</h2>
        </span>
        <span className={styles.navBarElements}>
          <h2 onClick={() => setCurrentPage('new')}>Compose</h2>
        </span>
      </div>
    );
  }

  function Anouncement({ anouncement }) {
    return (
      <div className={styles.anouncementBox}>
        <h1 dangerouslySetInnerHTML={{ __html: anouncement.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: anouncement.content }}></div>
      </div>
    );
  }

  function Homepage() {
    return (
      <div className={styles.homeBody}>
        <Anouncement anouncement={anouncements[anouncements.length - 1]} />
        <Diary />
      </div>
    );
  }

  function Articles() {
    return (
      <div>
        <Diary />
      </div>
    );
  }

  function New() {
    return (
      <div className={styles.parentViewer}>
        <input type="text" id="title" placeholder="Title" />
        <br />
        <textarea
          name=""
          id="preface"
          className={styles.textareaSmall}
          placeholder="A small preface for your article"
        ></textarea>
        <br />
        <textarea
          className={styles.textarea}
          name=""
          id="content"
          placeholder="<h2>Content</h2>"
        ></textarea>
        <button
          className={styles.mediumButtonDownLeft}
          onClick={() => {
            setNewTitle(document.getElementById('title').value);
            setNewContent(document.getElementById('content').value);
            library.push({
              title: newTitle,
              content: newContent,
              preface: document.getElementById('preface').value,
            });
          }}
        >
          {'Done >'}
        </button>
      </div>
    );
  }

  function Viewer() {
    let thisArticle = library.find((item) => item.id === viewingArticleID);
    return (
      <div className={styles.parentViewer}>
        <button
          className={styles.mediumButtonDownLeft}
          onClick={() => setCurrentPage('articles')}
        >
          {'< Back to Articles'}
        </button>
        <h1>{thisArticle.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: thisArticle.content }}
          className={styles.contentDiv}
        ></div>
      </div>
    );
  }

  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }

    return str.substring(0, maxLength) + '...';
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>My Awesome Blog!</title>
      </Head>
      <main>
        <NavBar />
        {currentPage === 'new' ? (
          <New />
        ) : currentPage === 'articles' ? (
          <Articles />
        ) : currentPage === 'viewer' ? (
          <Viewer />
        ) : (
          <Homepage />
        )}
      </main>
    </div>
  );
}
