<script>
const openBtn=document.getElementById('openLetter');
const letter=document.getElementById('letter');
const envelope=document.getElementById('envelope');
openBtn.addEventListener('click',()=>{
  letter.classList.toggle('show');
  envelope.classList.toggle('open');
  openBtn.textContent=letter.classList.contains('show')?'Close your letter':'Open your letter';
});
const reveal=document.getElementById('reveal');
document.querySelectorAll('.surprise').forEach(button=>{
  button.addEventListener('click',()=>{
    reveal.textContent=button.dataset.message;
    reveal.classList.add('show');
  });
});

const chaseButton=document.getElementById('enterSite');
let chaseCount=0;
function moveChaseButton(){
  if(chaseCount>=4){
    chaseButton.textContent='Okay okay, open it ♡';
    chaseButton.style.transform='none';
    chaseButton.style.position='relative';
    chaseButton.style.left='auto';
    chaseButton.style.top='auto';
    chaseButton.dataset.ready='yes';
    return;
  }
  chaseCount++;
  const card=chaseButton.closest('.welcome-card');
  const maxX=Math.max(0,Math.min(100,card.clientWidth-chaseButton.offsetWidth-28));
  const maxY=90;
  chaseButton.style.position='relative';
  chaseButton.style.left=Math.round(Math.random()*maxX-maxX/2)+'px';
  chaseButton.style.top=Math.round(Math.random()*maxY-maxY/2)+'px';
  chaseButton.textContent=chaseCount===1?'Hehe, catch me! ♡':chaseCount===2?'Almost, love! 🥹':chaseCount===3?'One more try! 💗':'Okay, last chance!';
}
chaseButton.addEventListener('pointerenter',(event)=>{
  if(event.pointerType==='mouse' && chaseButton.dataset.ready!=='yes') moveChaseButton();
});
chaseButton.addEventListener('click',(event)=>{
  if(chaseButton.dataset.ready!=='yes'){
    event.preventDefault();
    moveChaseButton();
    return;
  }
});

const welcomeScreen=document.getElementById('welcomeScreen');document.body.classList.add('locked');document.getElementById('enterSite').addEventListener('click',()=>{welcomeScreen.classList.add('dismissed');document.body.classList.remove('locked');window.setTimeout(()=>welcomeScreen.remove(),750);});
</script>
