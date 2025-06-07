
document.addEventListener('DOMContentLoaded',()=>{
    // Character search
    const searchInput=document.getElementById('charSearch');
    if(searchInput){
        searchInput.addEventListener('input',e=>{
            const q=e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card=>{
                const name=card.dataset.name.toLowerCase();
                const tags=card.dataset.tags.toLowerCase();
                card.style.display=(name.includes(q)||tags.includes(q))?'block':'none';
            });
        });
    }
    // Map regions
    const infoBox=document.getElementById('regionInfo');
    document.querySelectorAll('.region').forEach(r=>{
        r.addEventListener('click',()=>{
            const target=r.dataset.target;
            const src=document.getElementById(target);
            if(src && infoBox){
                infoBox.innerHTML=src.innerHTML;
                infoBox.style.display='block';
                window.scrollTo({top:infoBox.offsetTop-60,behavior:'smooth'});
            }
        });
    });
    // Timeline events
    const eventBox=document.getElementById('eventInfo');
    document.querySelectorAll('.timeline-event').forEach(ev=>{
        ev.addEventListener('click',()=>{
            const target=ev.dataset.target;
            const src=document.getElementById(target);
            if(src && eventBox){
                eventBox.innerHTML=src.innerHTML;
                eventBox.style.display='block';
                window.scrollTo({top:eventBox.offsetTop-60,behavior:'smooth'});
            }
        });
    });
});

    // Map markers on world map
    const markers=document.querySelectorAll('.map-marker');
    markers.forEach(m=>{
        m.addEventListener('click',()=>{
            const target=m.dataset.target;
            const src=document.getElementById(target);
            const box=document.getElementById('regionInfo');
            if(src && box){
                box.innerHTML=src.innerHTML;
                box.style.display='block';
                window.scrollTo({top:box.offsetTop-60,behavior:'smooth'});
            }
        });
    });
    