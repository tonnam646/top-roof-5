document.addEventListener('DOMContentLoaded', function() {
    
    // --- โค้ดสำหรับลูกเล่น Filterable Gallery ---
    
    // 1. เลือกปุ่ม filter และ รายการผลงาน ทั้งหมด
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // 2. เพิ่ม Event Listener ให้ปุ่ม filter ทุกปุ่ม
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // เอาคลาส 'active' ออกจากปุ่มที่ถูกเลือกอยู่
            document.querySelector('.filter-btn.active').classList.remove('active');
            // เพิ่มคลาส 'active' ให้ปุ่มที่เพิ่งคลิก
            button.classList.add('active');

            // 3. ดึงค่า category จากปุ่มที่คลิก
            const filterCategory = button.dataset.category;

            // 4. วนลูปดูรายการผลงาน (portfolioItems) ทีละอัน
            portfolioItems.forEach(item => {
                const itemCategory = item.dataset.category;

                // 5. ตรวจสอบว่า category ตรงกัน หรือ เลือก "ดูทั้งหมด"
                // ลบเงื่อนไข filterCategory === 'all' ออกไปแล้ว เพราะไม่มีปุ่ม 'all' แล้ว
                if (itemCategory === filterCategory) { 
                    item.classList.remove('hide'); // ถ้าตรงกัน ให้แสดงผล
                } else {
                    item.classList.add('hide'); // ถ้าไม่ตรง ให้ซ่อน
                }
            });
        });
    });

    // เนื่องจากลบปุ่ม "ดูทั้งหมด" ออก
    // และตั้งค่าเริ่มต้นให้ "งาน Top Roof (ติดตั้ง)" เป็น active
    // จึงต้องเรียก filter ทันทีเมื่อโหลดหน้าเว็บ
    const initialFilterButton = document.querySelector('.filter-btn.active');
    if (initialFilterButton) {
        initialFilterButton.click(); // จำลองการคลิกปุ่มเริ่มต้น
    }

});