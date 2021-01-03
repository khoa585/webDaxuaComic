import React from 'react'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import "./style.scss"
export default React.memo(function BackToTop() {
    const [isScrcoll, setScroll] = React.useState(false)
    let handleScroll = () => {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    React.useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })
    let onTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            {
                isScrcoll ? <div className="backTop" onClick={() => { onTop() }}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </div> : null
            }
        </>
    )
})
