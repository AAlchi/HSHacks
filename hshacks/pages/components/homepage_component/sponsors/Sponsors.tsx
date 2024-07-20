import React from 'react'
import SponsorCard from './SponsorCard'

const sponsorsConst = [
    {
        color: "platinum", 
        description: "Normandy Remodeling is a Chicago-area remodeling company specializing in home, kitchen, and bathroom models. Thank you for supporting HSHacks!",
        image: "https://i.ibb.co/YfdgkMF/nav-logo.png",
        website: "https://normandyremodeling.com/"
    },
    {
        color: "gold", 
        description: "CodeCrafters offers hands-on learning for programmers. Programmers get to learn how existing developer tools work by building similar ones themselves! Thank you for supporting HSHacks!",
        image: "https://lh3.googleusercontent.com/fife/ALs6j_Fr4B6sypE37bqSMZsgLHVbLA62sl1d02TLWRXOl3w2ykhwPeMKx8V7MD8xW-ulsDYuHwrcox1fgs7VKRLXHdC27_j6BJYdMcCOZC2-kVvZepEe4qg4p-E6ZssIc1698tXG2z1s8hNOUiEgJ3zPMGqPVPahHfFhqxgWg9xxoAmm9rZ83A46FLCoSiPq8vvtsYK0N2l2hzFU91hc74rH2r9O7l8PY2xb0pkkQtCqKNvmWjkDw55TxO0Q__2t4fFlV-OuCvE5-9KHL9ncVPLU2GwjmrOG98CwihHaWb0_92SVuZ21GiVUZGLrcQfMm9jEmB9Lg4bcjwfo7NKXsvod_2Q2VRERIyvDXxQ-whZu_PZrGEVFI4iq4ASpe10ENpDCrDku6apNohmFUpZzoocxorZuW-z6lCkyxmYktB3wf0tid1TNExBsDilF2j6lql59Wm2bZnux4YW_LMOqJzvGAxOD9TvJyNdic1anwiJIZZbf3GgX9Bjjwbsvk5GWqxuO85I5x7i4v-ARdnBREiswri5vlAIJLXtZGRYWiZrxlS-8CdJTB5NP3uzOB5HEL4Vdxa0OpzXQ5K7_r9hRZ-Zbp0ggBuFJ1Xnub02UQNyHI3Dkxguc6nEiXkUhShkArPEhn5ZvKODXKtTm5j61SnM_tVXdb2H5d7tHfY7k65TblShawjNWMCAAW-SKtswl1MAkFHJ4Q23XzlDWeD1s9qSoGOZMT-kE6mUOdwdSjh1wFYKSl0wnxQKWSFNNhQxIu06zBSwy9_PQxHhHuu_fEZJHMvA5LetbdijEbNEQ2xa1JwVRHF9Ra48JN1yLZXf0hAm6AR9Uprpu7_cKRBSAX9uXneaUBLRAFkRavVjvGy7LlRyZyNPCYOGTX1Xmsz4cgTHCOfgCW7I1VYcJEsiffvNGEceqpho4DBGU0ri3c_RwYD96bFCwC3NQOpgK2BTFL5xN-FIjC0HmOQt_-nzCgptDbEHsuoJyQuaS1qd15IQkUO_YjiD8u3WFNr0ePfAGKzXRWr7RaT6Z-3MjJwzELmm_sIG8G1yxfdWcfZvkWSVM8azzY-VPyfe8bmu7r4t7boMFywUD05tpvdsfIfG1HvRbq3RN3iKmX_r4q6EuUpv1WGWGsCc_RrldIqz3zjO26zw9zbVULRU1H4pKXaXCFpoXL__GkNBiZVscYFMdB87KlgGAMVpmiEAuceq5MOwL8MIdhScC9hK7VDdJkgVs-Zv8sBgTpng0_Go5F-JExC23ciSAkrPuXz2-rp9IDnsXILXDpVW9rkxlkZtd1iiL29OObCQLCUcunqcjTNBnkx_jK2_-MSgda8EiFcyjSQNb9LU-dXI_2u-2gdgKjqUEVhtvfKe3Dj8qXeCwnqogJPLtZ0KO54DpdpDMtnraH4bpaF5BlQJCgVi50o-PkXLeqDq0J3bXgrwBu_7ZebvgdZL39ub25WAxzkQNfLkNtkG5WdX1gp109qJK_xgpBHVUvzF_SIB4gxl8nFJLG0HWl2w3PyVf_4D6xCrN-LxRrjVJc_h9j4s6axa14qJrlrgseM1FDbRCsYgls96Q2Z3N9mtL3_SPh49CPyJYZceUtWfR0hTLfzaUN4x8y9ZU1Gf-lN80WqpUZzu_yJ4xbREKLciS_rkif7Oq42Qv4Z8dErRB9BuaNEcb5Aq0W6WRRLgJrLpZrorB3Qf6oxfIYmLqeN1FdMter9p2z_1S_Vm1g9Dgyho1vYPTiZA-Zs5Y6A1ogGhku1Y-G8Tgxw=w2880-h1576",
        website: "https://codecrafters.io/"
    },
    {
        color: "gold", 
        description: "Township District 214 is a Blue Ribbon School District that offers a complete academic program, comprehensive extracurricular offerings, and life-long learning opportunities! Thank you for supporting HSHacks!",
        image: "https://i.ibb.co/Kq2WYhv/D214-Logo-0614-min.png",
        website: "https://www.d214.org/"
    },
    {
        color: "gold", 
        description: "Hack Club is a global network of student-led coding clubs. They provide the resources, community, and support you need to start and sustain a coding club at your school. Thank you for sponsoring the HSHacks Hackathon!",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAA2CAYAAADQ4+u8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABmOSURBVHgB7V0HnBXV1T93Zl7bxjZgpUmVIiBIWZASJCgWpBmJYjRR1BhIMYkaCwkSol8MYOET0XwYNYHEhCIgARQEJCJtUQREYekdtrP79u17U+53zn119r3dnbfsAmv2//sNzNw3/Z57yv+cO8ugHsA5Z2cG3dnG5tMGSrLUDZv6cIBrgEETXHcxzhy4k8wZSIFDNPxNA868eHQFY5CH6wcY8P0c2EHV4McMm3SwxWdLj0EjGiwYXCRyXxzfSpOkjl2fWLyx6IaxvTSdTURhGcYM3gmFKRXqBiirUIw3exzX9hnAvgDG12e2se1iixbp0IgGgYsStlPTRiW4k2z/ZiXQM20tP4hN/eGSghfjI+SgltwAurI0Y1T3A2z6dAMacUXiooQtd+bYSahl5idv42A/AZcVDJiKwncS1zZKOv/rIX5ic9+dO1VoRL3j/LBhSbo74+qrdiz5qrr9ai1s+2eNymRgy5WLeWrKx3iiK0yf4IMVcg5rAPS3PLJzS+stizzQiDpF8eDb0zRVmYhv+w+MG49kbF+xqLr9JagluKE8iJ2Zaj965QkaAZ28dJQ4fBHy2gRD3ZLfb+zUs33GZE+bNq3Wz9wIP/iwYUpe39F3az77h9j7r6Ebc3DOrb2X1HRcrTTbwZnjmumMfyWVs8zU9RgvNhCdgQ/rwwGyEV/XwrNlue9137fPB42IC+ezx9wmAfs1rg7FRaE2GYzhadtWbKjp2FoJ2/6ZY+fioZOdSEwk7ql5f+mq5uAYOQT0w8fAt2kHXBlgZyXGl3o0Y07LnBX7oRFVgjRZfkXKbUhZoZCxoZV+Xp+5bdl3rZwnbmE7Mm1sqi8ZcpmOWm01B6kGrcYSXZD2r7nAMtLEtnvO21Dx9xVwpSCg7T6ySfwPL43stWN6YzQbArkcU1Z/+YAM8FOksbpDQJOFwMHQZT6k+Zbln1k5X9zCtn/muNn436/sZzgkb655f/vQ/pD8p6dD20bxBSj+3k+Al5VXeQyz2QASnMBLSuHSgm/Suf5yXplrVfd9i/5rTez57FGdUK5uRyH7Bfq+bavaD4Vn1ZnSA+OsuiMKxIFDr9zVRtPU+5HdB+cBa8condqatqXUFFD6dAf1k+0x95eaZUDirx8CpUsH8H26E8rfWAC81A2XBmyozJShWcnq5/n9x7yqVXiWZO3+6FJd/LKCtNhPV++5lTF9Ar6H0diUyqs/RDN0mBmP3xuXsPl82gSJsUylAMCWb+0Y5bpuUW22Hl2qFLakZ38GtuzrxLrzzltA/XwP+D62pKXrEtcDY+8qroRn8rNHLzBc2vxmG1edhW8hzvUfd50s8Qnsw92jOePXoqBZsnYc+OLMpJJPIQ5YFraTr43NcHtgCq27DnJ/AqkGMIcdlGvaR7c3TY+5v+367iFBC4I0YXVQ2rcB5wN3gYTnLP/fd0H7yqLKtYbOeAczpAr7bwqyx36kgfZmMw0+ZTtXlkMDhaAt3KndZQnGYxeiFuOdQXSnhQ4NgPxcFXwz2MaNGsQBy8LmLme341XaMjy97Zy1Y6SspsCaJEW1M0mObsMBlfDghKh27XDVqQmlw9WQMm8GsJRksZ30zGQo+fEz1fqDtQKHJOyK8TIo4wsVOFKQPeYdhcGHKa3tOQ0hN5vb8VZHWqp9CEjsxoIKNp5JvB0+jwNqCQyoVl21ffU+iBOWhO3I2z9yqgUlv8GLgPMw8moWrbTStVNMrawfPh7VZsvuBXKvrqY2I78Q9GOnIBYklxMSpz8WEjSCjMJn/+4g8C5fC/UFfAXt8KGmqxym5x/3nc/PHrsYSe1PVKbvOKmfPnm5U2SkuU6oKc2cPqUjk/T+mMYbjM034+Ly78AvtvrCx3VtBtQCloStorB4hMRZN4Zv2n4cLMM26PqY7bzcA0yWgethpeCcOBqYYr4d/dBx4EUlMc/hGHszKB3bRrXLXdBsL4dLAuzIZvjfZC7BZAVkT1u59a68Aa33SRy2o/N8ABzGgczNK84wiMNGxQGOTn3hmj0tDNA6cYP1kEC6pqCcd0lk/HouGWl1UNQTBTzjO5k7V34OtUCNwkYPlGvseYJsupLHQb4AlmHr3jlme+JjD4Lj5qHgW/8ZVHywDmQkfW39rovaT92XK0ZiZTC7XQQPsSBnxPYHY4G5XMA9dZb+cGFPDMQBORDveBJ6CjrXpAuF2WNP5nM4ir+dwGc5hYJ5XjKUExqDM8yQznsVKImVt+XdutlPNrk2yal6m3K70tzOeXOfxlsgEd0UjUUL1O2tCtZ8eTUKPOaopTQmQUimeT0IWRA4iHYW9Rvbi9Z9umwwG3hAUmMOJsWABHxGkR4sN7STNQpbbsJukhhSxaKyw2oeVGnTAjMHzWL/iG9LubaTWFwP343URlm0uTVwvH75dczDXfePw1d9lX8DtaOGQqlghCtO3SQZqgL5hfYRg8CFvqFMx9sUwfv5PtwE7lf+ElOwawtOWRyANPw/Dfu+R+AGgKwDZ7r4ESQdXPg+0RTTlb2h+8Q7w4BfdhlokdGTZzq+C9pd8v8aFCn/v/HdM3PY8L13RqvTBxRUBkQrVfzlnziwD1o7XoY3g/ZIlgJrRux0sxAV+olzt80mT6rZjMrsMc65RDW0douBAUHJ7m1pP+Z0iKUy9LxCjCxzo9ql9CbguCOcHfGu2gje1RsgZe4Mv8DKsR+cTHTis1PAcesw8/kw2nV+fxTacTu4/2ceXCbQnTuhnmG/oQ8k/OyHILdtZRrcNhz0RXc+iu5NBdQ9eJEGxveytn6wvtoKiNw5t6agoI0VN3oOU1MWgzzSII6bBse4rvVRqH2x16/xKsF1L2q15k3Fun78NLhfmo8rEepWj1a95B8mPv5IlKBFwjFicJRWlJpnYgCSBA0dLCkBUjCLk/zSVJDbtRZtRmFxSLhYWhNQeneHugZ29yHDqw7P2v7BetquVrPpquNelH9hC+0nwTLogeTO0fya95NtoO/+RkSMSreO1fKH3hhEroxm2XH7cP8GmtmyP72BPhe+sARX6Fzc6406zjawNwYUN5na+IVSIawyZipI67HEBGCo5YIpMhndgCbzXwSuauCe/Wf0L7dAQwFTMPjSwsGX0rkD2Ib6i6i9K9ZhZmYHqF/sQzenKTR54wVgmBpkdhvUMbbLhjopfdeqvcGGKjUbTVrBLP9EsVMFB1sc/LltQC9B6JqAwuH58z/A8/flUPLIU1Dy0G/QBG4QnR51bXxRGgplZTjvuQMFwq99PH9dClqOv+TExOWVV/K1JeTvptxvatJPn4OSR6eKxfPGQiFQRgGO9PMFoX1IqEmrSRmpkPTUZNEhDQEUlDVZ+KopgNJPhOkj9fO94Nu0XVgNAwcbcL8lqIpiqhUYbNPBGJ2e8++9kc1VCtv+l7/XB9XgAFq3n4qjQBJNlg19g8rwLFkT5tfI4UV/rOz3c6Dsdy9H7avt3R+VhFdQWzrvul2sG+jPeRa+H75k04zQul6JKiE/JWg6CCRYpVNn++9F08CzYBmUTPw5FE+Y4teSweuhHxMECZ187TVwpYC0kHP0TaD0ik4Fkj8rX90S88sPo/XwP4NxvhCMM+fFunPiGP85cPAkPvFjodG1g8fAOFI3df2YNn9rfWvboObbVkR5+FWaUdnQxxmokMUDxDGBTkLNQ2o7Eoa7HCr+uTL2dWJ0om/NJ1FtCb94IGQqpfRUSFs0T5hBEky5W1gweF6R6TjnPWPM596EpnyfOfDQT5yJuh5rYk6Tkd93yUDPWY1/SwR4ImZLeIVXDBIjQiMbwewJhq7OcSOhLPCsFSs/hoSH78H0YTtw3Tce7MOycUD5373SvjWkvD0Lyp6dCfqpWqeANVSST2UWeV+bsHVZzKxKTM126I93NUErSpl/kN24lIB1kO+TnBjaRHMMFe8sBuPkmZi723qauTjSPL4tZs7QjmG6rV/PcAPRAVQ90rOLGKm2iBGu5x4NrUuZafhbRFaC7sViLZ2U6DLflxZOA5JWoI5MXTQXO30KxAMSWqlVFuZyM2L+bh9+A6SvWwC2wX2rPkmS//1SFO8YbfZF1Q1h31LpGvaL1Yh3mjDlvpCgiedCwVSQDE+e/azVPHxlnERC5p6mO5bNZgdXe6vaKaZm84ExAKVQhCf240gRxpP9u4C+wLkCjOQyROd6V6wVpiom8CHlVi1MTXruETw+XFJCka3rh3cK81wj8Hra8bDvIV5oxHE6mhLtm0M1nwf9PKiUzYCAxmDY0YKUHuUPVCK1Sk0gs0Ya2oaDhDSQb+2nUD7vb6YSKoqYybQlPDIRSjbvjKnhjAj/yta3B3jmvxfa1g4cFtwjPTf1AeWnyYTqx06jX1qEPqi/iFU/dhIq3vsAtP1HQGqZBcm//6WgRJQenWP6y1UBeb4juqSOydqyqsaa7ZjCJivG5OAz2uPUqkSSXvj5c6Bc3x203MOg7626CkNumg6suXmE+z4yV60QCav07ApWQJ3G88Kdbx/Sz3zudZv9HVEDKENBSyTIFyQXIXnWVCRDw6bfavmTfXA/SHr+8VDgJKH2d44fiVkMO5RNn+PfiQQkQL/IaNqoti9y4AVBwsORumDoThA5zTBPHPQ3uU9FU3hORNMsOQlTeleDj/ZHV0bdvguF+UaRcy55+GkMzgLUEppa381DxPuiYlfLwsZgpU+HyS23rbLk8EWZUeLWUFxHiHOhQlQKIW7QqPG+v6ZaQSMEaYcguFdFE7oztE2m0vXQ3aFtERgseB+86z4FFbMLxtk883UxyowkJuU2LSN+NEDdsRusgDoPIswonVNCp5yoEJOgfbYTKpauqfF8VDSQ8OuHoiN0ANH5cptwNoSX+bUcvZfIwCYSIusReBYiuUPZlAD0Q2EnW2rXKny/m/w1hBLyalJa+GMFVBlNXJx41ooqrWAkPKjRfn9UPTG+5Y7lliOLKM2mel1DkKURV3acsla3VlvwCAKWfDvPmwtNIbgT6QeKrIIof3cxeBevDm1T1JuCRGUQ2oEjpvOztLCTb7jdoB2zRhaSVmG28Kshpznlpd+aOlU7ego10quWzqdQRUsgdUedWfbcK5ghKYCER+9F9v4ajODCY54EKXQcmlt16xfRJyR3Yc834Bg5VLgiDuQRy3PDz65hpG2/caD/HG3DAqvl7PWbZdSgcoc2QilQSpEqo229rxX+snfNJqgOeHg+ehmPZm5bXuPUvaj3ULlBYsZ4il/FjxarcWsLbdc+QTBKSC14UIh8H2+OvBGTk+z7zw7wISEZCfsAc0pM3ZwTWhem0BGRBqvwAZREZyRiwdanh2lbwY4JJCYFSIOWPv4Hy3MkHLd8J7TunoUE8catYr3059MFj0ccXxDG2fBLFw5+FdB2fS0El4KEygR6pMaXWocHiIHcGplI5bquwoQLs9kfOVG8B8GDvvXPKgM5AQ45uswfbLpluYU5ddEwCVvOm4/YpAv5Iyi5S0FBbUxoPCCTUfr4C1X8SGazQAwlMldlv3tJ+CNBENdkHz4wvDvup+4Nz8jjRiViELe5bq2w1FaZv4oUNPShyp6ZhZ1i3ZmlOjtxT0hWmzIReM9GvpmqMfLCwiZXVciA0NBU6siPkVlXMEiILNkKmmJx6+nmb/tQpE/CZusbju5Jc5e98DpoO6uQIbxN9M/eKCr0/qpTNdFmTTAJW5OS/B6ccWHk5WLrudB6AXaE+/m5UD7/X8DPnjcJGkFBtS9lhsuJdNSSPEJDEGFrYDYhKCY0pZAisVgOdyTIn5GrKI0i+FZvxIjWWoVE6JyB+9SPnxS1fNVBJ81Gpo4qRNKqKYknU/rVfiFsEnKCClJDIZMbYZZBNQdEwm996PtCMLUvvoIKtCjq519VeV+YRSrBfyalu4qXZx6Mrwy8MkwBggHGRB5oU0rhsn9WgXuRhEEqo7KgEcifCe2HkZbnX9GkMY8wJxSZOb57A9QE571jTHlC/ehJEZgE4RhzE7BmGWAVIu/q8ptzK7PEDCSYudvf8Swpsdp9IyPhIBVDiMx+qLvN1ds0R6Ng8F1Q+J274cJjM9CNyYktaFxI/NoLPt42Y9uyJfHON4gFqdJWqLRWpvfLRUkSpR3QQYDP0JNbi/ewhhZs+wiN7SZs+xJ/O47SXx/1KVVCwxwfLyoWYbz75b+Ab8PWqH0o2RwJJzLn5D+RU0zCVxkU/UZWq1Dm48IvpkP5//0j1EaazzG8ZqENHxB+xSLKrQH0PKGIFE1jdTlZFf0v3yfbxLp94PWQ+OSPwXX/eFMJlppTK/eKopSpGQUVd7TbtawY6gghM8qnDVMOcOm6QDmeZmTCw7ajxqceN9XmJrnnjWvvqTxbnOYaPrdwu+1UuiOJqXpios2eyXXe1pCM9gZnHdHHH8D95HCd53rUnXuh6Ae/xBUtzBdVghdpiYRH7g4RuyQoSc89JjQhOdelz84SQUoQjluGhsqXCJToJ7OrVvJliIvyLlktoreawH2+kFmUKTKkeju9apNB92UQp5flvw+aY1FdnZn75bdECooGkHO8uXpZQ61M3Fpc4HyrZPDH03NWWJiCHh9CwpabnH4DXkg4F5h6KD6frq1ss2Vl2MGJQVGR8E33V5jSQmwqZdpNuaazPW9OtLkcPSRD7qIzns0ZG4nasDXEOWc1Fkw+WgxQ9FU+7++Q8NP7TO2inAgXpWuHkLARYZswKczpkRUpf8f/BSgDSVKO7HvwExI2dLCJA6tMtVR5n3gfJDRknmkSkLa3+k+LRAYNNEAq84mmffG3kgefBNcDd4Hjthv9/CAFHhhVlj31J+xJy18VIFs6IyOhZGZdmMxYCGs24MPC63Cs7/SVdUJ8BGaUbw0s79Dsn7MVzlYO3dGDS+x27v8ajrUUQS3g+ccyqjYWKS+WECZqtSMnRJVvEK777jTldNWNmLD/5nB4/0PHwRYQNsFTIS1hVdiIKlECs8Ccd4yAshqEjZeEuTYZqQvt64NCM5K2o0jZPqivYKcqMA1Iv5EmpCLS8rl/C5Vg0UCMzOfWgO2ark7KqlQSVNcICRvjvG9wogTjUKczfSMRGDVHA8sH1HYye3wrOzfGotnNxk1a2kEdaD4BNFmed5eAF6NIMn8S5v8ot+hd8XG40JKI0VvDXBgJUdmL80x5SUrw2/qHJ+XYMIVmdcogcYlKFz9nZkefUMYsiH7idJX7R2q2xKd/IrIolOc08Ya0H1IWQhADoOfh56wzE9jPNJrmphd657KLoDSsQnQo8WtQmtc1mC1AM1qrqVq1RattS4naf42WU31GJdhtSn9u8EESY5TcpKUFXCQoYV4RkX2IQrA6As0qZQZ4sXkambbfnMCXu3YAq1C3ot/0wAShEcnhT5r5FJS/+jZwFCqKqomUJdJa/c+O0L2GbsvlwnSWuQKFcqMUGHjeWwm1Bod3Kzj/bTzppouFELbksrxuePFQh+oS1CqEqQu09H/aYGNggfP9bstSmL2vztl3mCTmQ3SEugYSvsXo90jN0tF0HolZWq5R6VLA0SdYiSxDx359CNQ9B0LlTpRCSpk9VVA6wck+VP0SFDaVPiERvBb+r6NfRsw/0Rba/sOCzKUgp1bALABnxpOZ21dsrK/5rFVBCBvTeUd03BOCjboPLvPnmMNotkN80IWG8Er0954+V5bYRZKkbInJP8A2qiSuk3pt0hbBataYv1OHY85RCWQD1BxrSX0BJFDL//g6pPz5hfAMfjTdkbPK1IioWEeBKrrlh/7PhhVdsJocrx4c9qPJej5j+7IFl1rIghDDdP+scc/g5Z8PNir5pakdXlwXT8nkZUHekJFXGT7nODRON9MEYXyGZlCPoKIASp5TdsL9+oJqhTMWyG8jH0yJyGVSCsv77/VQPuftEJlbx8BwlL9Q6i15o92ujXXGmdUGQWFbiR0lCvwxKr3Q5YllTaCBYQNGud08qcMxQzgGQ7WhaIIw58TrfMrQRQOjIPma9mhKW4nJPuqe/fX1/bnT6HvPVz2eucgIxDcq6glsA5K5LZLSqFC9rWjBCKXzk+9b936vQBwZ9iNnUnlhd5mxbCSXR2Bm5Ib61npXEM6gjZzPDd/rARfkioHSytE0TQe1KQt/H+KKGAUXg3Yb3yHKPSewzBVBBrf31mU2ACme2/BR+8K3DRz2Yg++wmza2vTNK+P4/M+lg6JJviwJpDCbyXg9FxZdegRG+OrAMi1v0OgWzCcPwOh2JG4PRNehPeUVoOGhFAfOdkOD2U1zlq25XI6/VSiSwlpF3iJG2t/Kz3lGounmFcSoLg0scGLgyPQEI6GPzvlQ9Pl6G+jvMb9bUTfEct1CY/5szGK3z72ozRdrT0MDgSKD1FGPkDZME9dzfe6Vh9ZbPiRtvjawCBRk35uCMecABXhPKipAyqsDpojaSVx82JgqEi/VRFLKuCDpzXfLnK1zM+n9AAne4KCgoJlmCaNma/A+W10gY9tCSiF8FFgE6Ft1xSt2tJYctiyDS1mY7m7JOaO66xb054uQq0zHvVLRL0zFaJgieqpjsi6U/orY03j8cTye8pRf64bxuSypuzK2rY7jy3hXJnDgsvYmUy+xBv9Q9YXAn5c8FlhigtJtiS7uUD2aMzHRqbjLeQJwJVGSDYfEmd0ncQczmATckGhbsoFX51KFDYwLXJHyZa/Pvaa9q2jCt/DvqCroHGdFzoHmBjTYL2FfCQik2y7uHe6EbyUw1w2mGmdDgsa/TNyIegF9aCDN1OAvomtEI+ocEn3jHxrRiEuA/wcA65B+/lYV4gAAAABJRU5ErkJggg==",
        website: "https://hackclub.com/"
    },
    {
        color: "gold",  
        description: "Draftbit is a tool to build native mobile apps, responsive web apps, and internal tools visually and collaboratively. Thank you for providing us with Draftbit access!",
        image: "https://i.ibb.co/9T7S4Fh/draftbit.png",
        website: "https://draftbit.com/"
    },
    {
        color: "silver",  
        description: "MobileMakersEdu by Uncharted Learning offers iOS development courses that enable students to learn coding, design, and collaboration skills to bring mobile app ideas to life! Thank you for sponsoring the HSHacks Hackathon.",
        image: "https://i.ibb.co/27ZzQ4K/1-removebg-preview.png",
        website: "https://www.unchartedlearning.org/student-programs/mobilemakersedu"
    },
    {
        color: "silver",  
        description: "United Coder offers instructor-led project-based software development and test automation engineer training programs, enabling anyone to pursue new careers in these fields! Thank you for sponsoring the HSHacks Hackathon.",
        image: "https://i.ibb.co/QX1kWfz/unitedcoder.png",
        website: "https://www.unitedcoder.com/"
    },
    {
        color: "silver",  
        description: "StickerNinja is a sticker printing company that provides awesome, high-quality stickers at a low cost for all of your sticker needs! Thank you for providing us with HSHacks stickers!",
        image: "https://stickerninja.com/wp-content/themes/sticker-ninja/dist/images/logo-dark_3e368c83.png",
        website: "https://stickerninja.com/"
    },
    {
        color: "silver",  
        description: "Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.",
        image: "data:image/png;base64,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",
        website: "https://www.postman.com/"
    },
    {
        color: "silver",  
        description: "Wolfram is a technology company that specializes in the development of mathematical software, programming languages, and data analysis tools! Thank you for providing us with Wolfram|One access!",
        image: "https://images.ctfassets.net/2lpsze4g694w/7bkN622iWKMAPwRpRR5LEV/e97ceedd530c321519e75d0294f0fb8f/wolfram-language-text-logo-copy-1.png?w=800",
        website: "https://www.wolfram.com/"
    },
    {
        color: "silver",  
        description: "For over 40 years O’Reilly has provided technology and business training, knowledge, and insight to help companies succeed. Our unique network of experts and innovators share their knowledge and expertise through books, articles, and our online learning platform. O’Reilly online learning gives you on-demand access to live training courses, in-depth learning paths, interactive coding environments, certification prep materials, and a vast collection of text and video from O’Reilly and 200+ other publishers. For more information visit oreilly.com.",
        image: "https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red.svg",
        website: "https://www.oreilly.com/"
    },
    {
        color: "silver",  
        description: "InterviewCake is an online software engineering course offering a structured approach to preparing for tech interviews with in-depth readings, practical questions, step-by-step solutions, and valuable tips.",
        image: "https://2023.hawkhacks.com/interviewcake-logo.png",
        website: "https://www.interviewcake.com/"
    },
    {
        color: "silver",  
        description: "Echo3D is a 3d asset management company for developers, focusing on API and cloud infrastructure for 3d asset management. Thank you for providing us with Echo3D access!",
        image: "https://i.ibb.co/tqHwGZX/echo3-D-brand-logo-2-removebg-preview-1.png",
        website: "https://www.echo3d.com/"
    },
    {
        color: "silver",  
        description: "InterviewBuddy is a platform that provides virtual face-to-face mock interviews with industry experts, enabling developers and students to practice and prepare for their next tech job interview!",
        image: "https://i.ibb.co/G2wjtPh/interviewbuddy.png",
        website: "https://www.interviewbuddy.net/"
    },
    {
        color: "silver",  
        description: "Art of Problem Solving provides advanced online Math learning resources, classes, and books for students from Elementary to High School, enabling them to expand their mathematical problem-solving skills!",
        image: "https://i.ibb.co/Vj0WLD7/Group-200-1.png",
        website: "https://artofproblemsolving.com/"
    },
    {
        color: "silver",  
        description: "Axure is a powerful tool for creating prototypes and specifications for websites and applications, simplifying the process of bringing your digital ideas to life.",
        image: "https://cdn.worldvectorlogo.com/logos/axure-2.svg",
        website: "https://www.axure.com/"
    },
    {
        color: "silver",  
        description: "Balsamiq is a rapid wireframing software that combines the simplicity of paper sketching with the power of a digital tool so that teams can focus on what's important!",
        image: "https://i.ibb.co/WsDKSsN/Logos-website-05-1.png",
        website: "https://balsamiq.com/"
    },
    {
        color: "silver",  
        description: "Desmos is a dynamic mathematical tool that transforms the way students and educators engage with mathematical concepts! Users can graph functions, plot data, evaluate equations, explore transformations, and much more!",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Desmos_logo.svg/1200px-Desmos_logo.svg.png",
        website: "https://www.desmos.com/"
    }
]

const Sponsors = () => {
    return (
        <div className='text-white py-20 lg:md:px-20 px-2 justify-center items-center flex-col flex bg-gray-100'>
            <div className='items-start flex flex-col w-full p-3'>
                <h1 className='text-3xl font-extrabold pb-3 text-black'>Our Sponsors From 2024</h1>
                <div className='w-full border-b-2 border-gray-300' style={{ height: "2px" }} />
            </div>
            <div className='flex p-2 gap-10 flex-wrap justify-center pt-10'>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-slate-900 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Platinum</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "platinum" && (
                            <SponsorCard color="platinum" key={card.description} image={card.image} description={card.description} website={card.website} />
                        )
                    ))}
                </div>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-yellow-500 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Gold</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "gold" && ( 
                            <SponsorCard color="gold" key={card.description} image={card.image} description={card.description} website={card.website} /> 
                        )
                    ))}
                </div>
                <div className='flex flex-col w-full p-5 rounded-lg gap-4 bg-gradient-to-r from-gray-400 to-transparent'>
                    <h1 className='text-2xl font-extrabold'>Silver</h1>
                </div>
                <div className='grid w-full lg:grid-cols-2 grid-cols-1 gap-2'>
                    {sponsorsConst.map(card => (
                        card.color == "silver" && ( 
                            <SponsorCard color="silver" key={card.description} image={card.image} description={card.description} website={card.website} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sponsors