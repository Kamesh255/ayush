import React from 'react'

const Home = () => {
    const openUrl = (el) => {
        window.open(el, '_blank');
    }
    return (
        <div>
            <div className='wedding'>
                <div className='weddingButton'>
                    <div className='col-11 m-auto d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                        <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1T3t0bZB1g-GMkXL11XKXVXJn6_1CUXZ3?usp=drive_link')} >Shaadi</button>
                        <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1jVYJmDNbqusFAn9Dm-7-4vvtDjA__EZO?usp=drive_link')} >Wedding Gust</button>
                        <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1MabnN3DhqfgmTjWVTGl0fgAKQTsG3fuO?usp=drive_link')} >Shaadi Candid</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 varmala'>
                    <div className='weddingButton'>
                        <div className='col-11 m-auto d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                        <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1gw3WUby_hfY2pH9oHyZ0Cr5X3kgiV4dO?usp=drive_link')} >Entry</button>
                            <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1GyamNsQHfF5zAz9blEkw4vrYKl6dx-4e?usp=drive_link')} >Varmala </button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 varat'>
                    <div className='weddingButton'>
                        <div className='col-11 m-auto d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                            <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1tYm1KFuA6W4OzDzBjHoBonskq0ZK2u1j?usp=drive_link')} >Barat</button>
                        </div>
                    </div>
                </div>
            </div>

              <div className='row'>
                <div className='col-md-6 ring'>
                    <div className='weddingButton'>
                        <div className='col-11 m-auto d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                        <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1a4evATdspydFeQnKxql-U2vP5bK_tvPS?usp=drive_link')} >Engagement</button>
                            <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1ktTlI8y_AjR-7i9j13IrfTu-rccIK1tJ?usp=drive_link')} >Candid </button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 haldi'>
                    <div className='weddingButton'>
                        <div className='col-11 m-auto d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                            <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1og3Z7FeAL8gJ0_7flmQ3C3w61Q6QgMnl?usp=drive_link')} >Haldi</button>
                            <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/14J2F8v63Yz7dd5UHW65EPP3rFfJ6SnZF?usp=drive_link')} >Mata Poojan</button>
                            <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1ntC2ScFfcHfCvJZ1VctUcn_88FNLGvXQ?usp=drive_link')} >Home</button>
                        </div>
                    </div>
                </div>
            </div>

             <div className='bride'>
                <div className='weddingButton'>
                    <div className='col-11 m-auto d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                        <button className='weddingBtn' onClick={() => openUrl('https://drive.google.com/drive/folders/1c6JFk076BotGWpfDtcJxD4L17mIX7hhF?usp=drive_link')} >Bride</button>
 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home