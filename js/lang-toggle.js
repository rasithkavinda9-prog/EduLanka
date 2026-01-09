const btn = document.getElementById('lang-btn');
let isSinhala = false;

const pages = {
  'grade6-maths': {
      en:{title:'Mathematics', subtitle:'Lesson 1: Numbers & Operations', content:`<p>Welcome to Grade 6 Mathematics. Learn numbers and operations.</p>`},
      si:{title:'ගණිතය', subtitle:'පාඩම 1: සංඛ්‍යා සහ ක්‍රියාකාරකම්', content:`<p>Grade 6 ගණිතයට සාදරයෙන් පිළිගනිමු. මේ පාඩම සංඛ්‍යා සහ ක්‍රියාකාරකම් ආවරණය කරයි.</p>`}
  }
  // Add other pages like grade6-science, grade6-sinhala, grade6-english
};

btn.addEventListener('click', () => {
    isSinhala = !isSinhala;
    let pageKey = document.location.pathname.split('/').pop().replace('.html','');
    let data = pages[pageKey];

    if(isSinhala && data?.si){
        document.getElementById('title').innerHTML = data.si.title;
        document.getElementById('subtitle').innerHTML = data.si.subtitle;
        document.getElementById('content').innerHTML = data.si.content;
        btn.innerHTML = 'English';
    } else if(data?.en){
        document.getElementById('title').innerHTML = data.en.title;
        document.getElementById('subtitle').innerHTML = data.en.subtitle;
        document.getElementById('content').innerHTML = data.en.content;
        btn.innerHTML = 'සිංහල';
    }
});
