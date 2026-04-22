document.getElementById('start-btn').addEventListener('click', () => {
    // 1. Sembunyikan layar start
    document.getElementById('start-screen').style.display = 'none';
    
    // 2. Aktifkan Audio Context
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    // 3. Mulai game
    gameActive = true;
    spawnEnemy();
    draw();
});
