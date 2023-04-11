import { IIconsData } from './interfaces'

enum SocialIcons {
  facebook = 'M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM14.7293 8.44078H12.9977C12.7925 8.44078 12.5645 8.71078 12.5645 9.06958V10.32H14.7305L14.4029 12.1032H12.5645V17.4564H10.5209V12.1032H8.66687V10.32H10.5209V9.27118C10.5209 7.76638 11.5649 6.54358 12.9977 6.54358H14.7293V8.44078Z',
  google = 'M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM11.3369 16.9452C10.6133 17.2968 9.83447 17.334 9.53327 17.334H9.37847C8.90807 17.334 6.56687 17.226 6.56687 15.0936C6.56687 12.9984 9.11687 12.834 9.89807 12.834H9.91847C9.46727 12.2316 9.56087 11.6244 9.56087 11.6244C9.50493 11.6277 9.4489 11.6293 9.39287 11.6292C9.09887 11.6292 8.53127 11.5824 8.04407 11.268C7.44647 10.884 7.14407 10.23 7.14407 9.32518C7.14407 6.76798 9.93647 6.66478 9.96407 6.66238H12.7529V6.72358C12.7529 7.03558 12.1925 7.09678 11.8109 7.14838C11.6813 7.16758 11.4209 7.19278 11.3477 7.22998C12.0545 7.60798 12.1685 8.20078 12.1685 9.08398C12.1685 10.0896 11.7749 10.6212 11.3573 10.9944C11.0981 11.226 10.8953 11.4072 10.8953 11.6508C10.8953 11.8896 11.1737 12.1332 11.4977 12.4176C12.0269 12.8844 12.7529 13.5192 12.7529 14.5908C12.7529 15.6984 12.2765 16.4904 11.3369 16.9452ZM17.4005 12H15.6005V13.8H14.4005V12H12.6005V10.8H14.4005V8.99998H15.6005V10.8H17.4005V12ZM9.86807 13.38C9.8052 13.38 9.74236 13.3824 9.67967 13.3872C9.16998 13.4165 8.68452 13.6145 8.29967 13.95C7.94687 14.2692 7.76687 14.6724 7.79207 15.0792C7.84607 15.9324 8.76167 16.4316 9.87407 16.3524C10.9685 16.2732 11.6981 15.642 11.6453 14.7888C11.5949 13.9872 10.8977 13.38 9.86807 13.38ZM10.9169 8.74198C10.6265 7.72198 10.1585 7.41958 9.43127 7.41958C9.35259 7.42016 9.27432 7.43105 9.19847 7.45198C8.88287 7.54198 8.63207 7.80478 8.49287 8.19598C8.35007 8.59198 8.34167 9.00478 8.46407 9.47518C8.68607 10.3164 9.28367 10.926 9.88607 10.926C9.96484 10.9267 10.0433 10.9158 10.1189 10.8936C10.7777 10.7088 11.1905 9.70318 10.9169 8.74198Z',
  linkedin = 'M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM9.18047 16.7748H6.84767V9.26758H9.18047V16.7748ZM7.99967 8.34598C7.26287 8.34598 6.78647 7.82398 6.78647 7.17838C6.78647 6.51958 7.27727 6.01318 8.02967 6.01318C8.78207 6.01318 9.24287 6.51958 9.25727 7.17838C9.25727 7.82398 8.78207 8.34598 7.99967 8.34598ZM17.7005 16.7748H15.3677V12.6144C15.3677 11.646 15.0293 10.9884 14.1857 10.9884C13.5413 10.9884 13.1585 11.4336 12.9893 11.862C12.9269 12.0144 12.9113 12.2304 12.9113 12.4452V16.7736H10.5773V11.6616C10.5773 10.7244 10.5473 9.94078 10.5161 9.26638H12.5429L12.6497 10.3092H12.6965C13.0037 9.81958 13.7561 9.09718 15.0149 9.09718C16.5497 9.09718 17.7005 10.1256 17.7005 12.336V16.7748Z',
  twitter = 'M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM16.6865 9.91678C16.6913 10.0152 16.6925 10.1136 16.6925 10.2096C16.6925 13.2096 14.4113 16.6668 10.2377 16.6668C9.00442 16.6688 7.79683 16.3146 6.76007 15.6468C6.93647 15.6684 7.11767 15.6768 7.30127 15.6768C8.36447 15.6768 9.34247 15.3156 10.1189 14.706C9.64573 14.6967 9.18727 14.54 8.8074 14.2578C8.42753 13.9756 8.14517 13.5819 7.99967 13.1316C8.33946 13.1962 8.68949 13.1827 9.02327 13.092C8.50973 12.9881 8.04791 12.7099 7.71612 12.3044C7.38433 11.8989 7.203 11.3911 7.20287 10.8672V10.8396C7.50887 11.0088 7.85927 11.112 8.23127 11.124C7.74983 10.8035 7.40901 10.3112 7.27852 9.74774C7.14803 9.18429 7.23773 8.59228 7.52927 8.09278C8.09922 8.79358 8.80998 9.36688 9.61555 9.77555C10.4211 10.1842 11.3035 10.4192 12.2057 10.4652C12.091 9.97835 12.1403 9.46727 12.3461 9.01139C12.5518 8.5555 12.9024 8.18037 13.3434 7.9443C13.7843 7.70823 14.2909 7.62445 14.7843 7.70599C15.2778 7.78753 15.7305 8.02981 16.0721 8.39518C16.5799 8.29471 17.0668 8.10845 17.5121 7.84438C17.3428 8.37014 16.9885 8.81659 16.5149 9.10078C16.9647 9.0466 17.4039 8.92567 17.8181 8.74198C17.5139 9.19785 17.1306 9.59571 16.6865 9.91678Z',
  youtube = 'M13.9241 11.7996L11.2289 10.542C10.9937 10.4328 10.8005 10.5552 10.8005 10.8156V13.1844C10.8005 13.4448 10.9937 13.5672 11.2289 13.458L13.9229 12.2004C14.1593 12.09 14.1593 11.91 13.9241 11.7996ZM12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM12.0005 16.68C6.10367 16.68 6.00047 16.1484 6.00047 12C6.00047 7.85158 6.10367 7.31998 12.0005 7.31998C17.8973 7.31998 18.0005 7.85158 18.0005 12C18.0005 16.1484 17.8973 16.68 12.0005 16.68Z',
  dribble = 'M12.3125 11.9784C12.3521 11.964 12.3941 11.9532 12.4361 11.9412C12.3296 11.7052 12.218 11.4715 12.1013 11.2404C9.84527 11.9088 7.68527 11.9148 7.30007 11.9088C7.29647 11.9388 7.29647 11.97 7.29647 12C7.29647 13.134 7.70447 14.2236 8.44607 15.0792C8.69327 14.6808 10.0037 12.726 12.3125 11.9784ZM9.14807 15.7356C9.80076 16.2358 10.5734 16.5558 11.3886 16.6636C12.2038 16.7714 13.033 16.6633 13.7933 16.35C13.5728 15.1534 13.2426 13.9796 12.8069 12.8436C10.2617 13.7436 9.30047 15.438 9.14807 15.7356ZM15.0665 8.43238C14.5118 7.95594 13.8537 7.61535 13.1444 7.43767C12.4352 7.25998 11.6942 7.25009 10.9805 7.40878C11.6067 8.25964 12.1764 9.15076 12.6857 10.0764C14.2253 9.48478 14.9213 8.63158 15.0665 8.43238ZM11.6465 10.3968C11.1293 9.48982 10.5624 8.61209 9.94847 7.76758C9.31465 8.07641 8.75797 8.52315 8.31923 9.07505C7.88049 9.62696 7.5708 10.27 7.41287 10.9572H7.43327C7.92047 10.9572 9.65207 10.9176 11.6465 10.3968ZM13.8173 12.5952C14.3753 14.1468 14.6321 15.4356 14.7053 15.8484C15.728 15.1274 16.4225 14.0297 16.6361 12.7968C16.0146 12.6203 15.3717 12.531 14.7257 12.5316C14.4161 12.5316 14.1101 12.5532 13.8173 12.5952ZM12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM12.0005 17.6364C10.5058 17.6351 9.07262 17.0409 8.01549 15.9843C6.95835 14.9276 6.36358 13.4947 6.36167 12C6.36294 10.5049 6.95743 9.07135 8.01464 8.01415C9.07184 6.95695 10.5054 6.36245 12.0005 6.36118C13.4953 6.36309 14.9283 6.95782 15.9852 8.01492C17.0421 9.07203 17.6365 10.5052 17.6381 12C17.6365 13.4946 17.042 14.9275 15.985 15.9842C14.9281 17.0409 13.4951 17.6351 12.0005 17.6364ZM13.1069 10.8888C13.2113 11.1048 13.3085 11.3172 13.3973 11.526L13.4825 11.73C13.8149 11.6904 14.1701 11.6712 14.5409 11.6712C15.2661 11.6726 15.9897 11.7417 16.7021 11.8776C16.6747 10.8555 16.3159 9.87 15.6797 9.06958C15.4877 9.31678 14.6981 10.2252 13.1069 10.8888Z',
  behance = 'M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.9797 10.1045C11.9797 11.492 10.8442 11.5802 10.8442 11.5802C12.311 11.5802 12.2412 13.4298 12.2384 13.5043L12.2383 13.5067C12.2383 15.8742 9.87322 15.7967 9.87322 15.7967H6V8.0395H9.87322C11.0507 8.0395 11.9797 8.71524 11.9797 10.1045ZM12.5306 12.9929C12.5306 12.9929 12.5282 10.0121 15.3914 10.0121C18.4046 10.0121 17.9791 13.38 17.9791 13.38H14.1245C14.1245 14.8215 15.4352 14.7303 15.4352 14.7303C16.6714 14.7303 16.6282 13.8955 16.6282 13.8955H17.9377C17.9377 16.1106 15.3914 15.9582 15.3914 15.9582C12.3349 15.9582 12.5306 12.9929 12.5306 12.9929ZM13.7896 8.495H16.8605V9.4516H13.7896V8.495Z',
}

enum BenefitIcons {
  machineLearning = 'M12.8722 5.86552C14.3044 4.7809 16.0527 4.1959 17.8492 4.20022C18.3532 4.20022 18.7543 4.46272 18.9874 4.64332C19.2478 4.84912 19.4914 5.11162 19.7098 5.37412C19.8647 5.5622 19.9493 5.79829 19.9492 6.04192V13.6502H17.6707C17.423 12.9496 16.9356 12.3592 16.2947 11.9832C15.6538 11.6072 14.9006 11.4699 14.1682 11.5956C13.4358 11.7212 12.7715 12.1018 12.2925 12.6699C11.8136 13.238 11.5509 13.9571 11.5509 14.7002C11.5509 15.4433 11.8136 16.1624 12.2925 16.7306C12.7715 17.2987 13.4358 17.6792 14.1682 17.8049C14.9006 17.9305 15.6538 17.7932 16.2947 17.4172C16.9356 17.0413 17.423 16.4508 17.6707 15.7502H19.9492V35.5217C19.9493 35.6772 19.9149 35.8307 19.8484 35.9713C19.782 36.1118 19.6851 36.2359 19.5649 36.3344C18.5947 37.1282 17.2969 37.8002 15.7492 37.8002C13.2586 37.8002 11.4043 36.5444 10.2052 35.0429C9.34371 33.9731 8.75365 32.7108 8.48532 31.3637C7.66943 31.1462 6.91294 30.7478 6.27192 30.1982C5.11272 29.2049 4.19922 27.5942 4.19922 25.2002C4.19922 24.0305 4.27692 22.9742 4.45122 22.0502H11.0242C12.3598 22.0502 13.4602 23.0477 13.6282 24.3371C12.9299 24.5899 12.3433 25.0812 11.972 25.7244C11.6007 26.3677 11.4687 27.1214 11.5992 27.8525C11.7296 28.5837 12.1143 29.2452 12.6851 29.7203C13.2559 30.1954 13.9763 30.4535 14.719 30.4491C15.4617 30.4446 16.1789 30.1779 16.744 29.696C17.3091 29.2141 17.6858 28.5481 17.8076 27.8154C17.9293 27.0828 17.7882 26.3307 17.4093 25.692C17.0304 25.0532 16.438 24.5689 15.7366 24.3245C15.6481 23.1353 15.1132 22.0235 14.2392 21.2122C13.3652 20.4009 12.2167 19.9501 11.0242 19.9502H5.12532C5.44662 19.3244 5.87712 18.7952 6.43782 18.4193C6.57965 18.3254 6.72849 18.2426 6.88302 18.1715C6.28662 16.4243 6.44202 14.3789 7.01742 12.7724C7.38492 11.7392 7.96872 10.7627 8.77092 10.1117C9.30012 9.68122 9.93012 9.39772 10.6189 9.34312C10.9213 7.90882 11.7718 6.72232 12.8743 5.86552H12.8722ZM22.0492 30.4502H23.6242C24.8774 30.4502 26.0792 29.9524 26.9653 29.0663C27.8514 28.1802 28.3492 26.9784 28.3492 25.7252V21.8717C29.0498 21.624 29.6402 21.1366 30.0162 20.4957C30.3922 19.8548 30.5295 19.1016 30.4039 18.3692C30.2782 17.6368 29.8977 16.9725 29.3296 16.4935C28.7614 16.0146 28.0423 15.7519 27.2992 15.7519C26.5561 15.7519 25.837 16.0146 25.2689 16.4935C24.7008 16.9725 24.3202 17.6368 24.1946 18.3692C24.0689 19.1016 24.2062 19.8548 24.5822 20.4957C24.9582 21.1366 25.5486 21.624 26.2492 21.8717V25.7252C26.2492 27.1742 25.0732 28.3502 23.6242 28.3502H22.0492V6.04192C22.0491 5.79829 22.1338 5.5622 22.2886 5.37412C22.5049 5.11162 22.7506 4.84912 23.011 4.64332C23.242 4.46272 23.6431 4.20022 24.1492 4.20022C25.9457 4.1959 27.6941 4.7809 29.1262 5.86552C30.2287 6.72232 31.0792 7.90882 31.3795 9.34312C32.0683 9.39562 32.6983 9.68122 33.2275 10.1117C34.0297 10.7627 34.6135 11.7392 34.981 12.7724C35.5564 14.3789 35.7118 16.4264 35.1154 18.1694C35.2666 18.2408 35.4157 18.3248 35.5606 18.4214C36.1381 18.8057 36.577 19.3559 36.9004 20.0048C37.5367 21.2753 37.7992 23.0477 37.7992 25.2002C37.7992 27.5963 36.8857 29.2049 35.7265 30.1982C35.0855 30.7478 34.329 31.1462 33.5131 31.3637C33.3031 32.5355 32.7151 33.8921 31.7932 35.0429C30.5962 36.5444 28.7398 37.8002 26.2492 37.8002C24.7036 37.8002 23.4037 37.1282 22.4356 36.3344C22.315 36.2361 22.2178 36.1121 22.1509 35.9716C22.0841 35.831 22.0494 35.6774 22.0492 35.5217V30.4502ZM14.6992 13.6502C14.4207 13.6502 14.1537 13.7608 13.9568 13.9578C13.7598 14.1547 13.6492 14.4217 13.6492 14.7002C13.6492 14.9787 13.7598 15.2458 13.9568 15.4427C14.1537 15.6396 14.4207 15.7502 14.6992 15.7502C14.9777 15.7502 15.2448 15.6396 15.4417 15.4427C15.6386 15.2458 15.7492 14.9787 15.7492 14.7002C15.7492 14.4217 15.6386 14.1547 15.4417 13.9578C15.2448 13.7608 14.9777 13.6502 14.6992 13.6502ZM14.6992 26.2502C14.4207 26.2502 14.1537 26.3608 13.9568 26.5578C13.7598 26.7547 13.6492 27.0217 13.6492 27.3002C13.6492 27.5787 13.7598 27.8458 13.9568 28.0427C14.1537 28.2396 14.4207 28.3502 14.6992 28.3502C14.9777 28.3502 15.2448 28.2396 15.4417 28.0427C15.6386 27.8458 15.7492 27.5787 15.7492 27.3002C15.7492 27.0217 15.6386 26.7547 15.4417 26.5578C15.2448 26.3608 14.9777 26.2502 14.6992 26.2502ZM27.2992 19.9502C27.5777 19.9502 27.8448 19.8396 28.0417 19.6427C28.2386 19.4458 28.3492 19.1787 28.3492 18.9002C28.3492 18.6217 28.2386 18.3547 28.0417 18.1578C27.8448 17.9608 27.5777 17.8502 27.2992 17.8502C27.0207 17.8502 26.7537 17.9608 26.5568 18.1578C26.3598 18.3547 26.2492 18.6217 26.2492 18.9002C26.2492 19.1787 26.3598 19.4458 26.5568 19.6427C26.7537 19.8396 27.0207 19.9502 27.2992 19.9502Z',
  embedAnalitics = 'M29.3991 5.7752C29.3991 5.35748 29.565 4.95687 29.8604 4.6615C30.1557 4.36613 30.5563 4.2002 30.9741 4.2002H36.2241C36.6418 4.2002 37.0424 4.36613 37.3377 4.6615C37.6331 4.95687 37.7991 5.35748 37.7991 5.7752V11.0252C37.7991 11.4429 37.6331 11.8435 37.3377 12.1389C37.0424 12.4343 36.6418 12.6002 36.2241 12.6002C35.8063 12.6002 35.4057 12.4343 35.1104 12.1389C34.815 11.8435 34.6491 11.4429 34.6491 11.0252V9.57619L25.2621 18.9632C24.9667 19.2581 24.5664 19.4238 24.1491 19.4238C23.7317 19.4238 23.3314 19.2581 23.0361 18.9632L17.8491 13.7762L8.98705 22.6382C8.84286 22.7929 8.66898 22.9171 8.47578 23.0031C8.28258 23.0892 8.07403 23.1355 7.86255 23.1392C7.65107 23.143 7.44101 23.1041 7.2449 23.0249C7.04878 22.9456 6.87063 22.8277 6.72107 22.6782C6.57151 22.5286 6.45361 22.3505 6.3744 22.1544C6.29518 21.9582 6.25628 21.7482 6.26001 21.5367C6.26374 21.3252 6.31003 21.1167 6.39611 20.9235C6.4822 20.7303 6.60631 20.5564 6.76105 20.4122L16.7361 10.4372C17.0314 10.1422 17.4317 9.97658 17.8491 9.97658C18.2664 9.97658 18.6667 10.1422 18.9621 10.4372L24.1491 15.6242L32.423 7.3502H30.9741C30.5563 7.3502 30.1557 7.18426 29.8604 6.88889C29.565 6.59352 29.3991 6.19291 29.3991 5.7752ZM7.87405 29.4002C8.29177 29.4002 8.69238 29.5661 8.98775 29.8615C9.28312 30.1569 9.44905 30.5575 9.44905 30.9752V36.2252C9.44905 36.6429 9.28312 37.0435 8.98775 37.3389C8.69238 37.6343 8.29177 37.8002 7.87405 37.8002C7.45634 37.8002 7.05573 37.6343 6.76036 37.3389C6.46499 37.0435 6.29905 36.6429 6.29905 36.2252V30.9752C6.29905 30.5575 6.46499 30.1569 6.76036 29.8615C7.05573 29.5661 7.45634 29.4002 7.87405 29.4002ZM17.8491 24.6752C17.8491 24.2575 17.6831 23.8569 17.3877 23.5615C17.0924 23.2661 16.6918 23.1002 16.2741 23.1002C15.8563 23.1002 15.4557 23.2661 15.1604 23.5615C14.865 23.8569 14.6991 24.2575 14.6991 24.6752V36.2252C14.6991 36.6429 14.865 37.0435 15.1604 37.3389C15.4557 37.6343 15.8563 37.8002 16.2741 37.8002C16.6918 37.8002 17.0924 37.6343 17.3877 37.3389C17.6831 37.0435 17.8491 36.6429 17.8491 36.2252V24.6752ZM24.6741 27.3002C25.0918 27.3002 25.4924 27.4661 25.7877 27.7615C26.0831 28.0569 26.2491 28.4575 26.2491 28.8752V36.2252C26.2491 36.6429 26.0831 37.0435 25.7877 37.3389C25.4924 37.6343 25.0918 37.8002 24.6741 37.8002C24.2563 37.8002 23.8557 37.6343 23.5604 37.3389C23.265 37.0435 23.0991 36.6429 23.0991 36.2252V28.8752C23.0991 28.4575 23.265 28.0569 23.5604 27.7615C23.8557 27.4661 24.2563 27.3002 24.6741 27.3002ZM34.6491 20.4752C34.6491 20.0575 34.4831 19.6569 34.1877 19.3615C33.8924 19.0661 33.4918 18.9002 33.0741 18.9002C32.6563 18.9002 32.2557 19.0661 31.9604 19.3615C31.665 19.6569 31.4991 20.0575 31.4991 20.4752V36.2252C31.4991 36.6429 31.665 37.0435 31.9604 37.3389C32.2557 37.6343 32.6563 37.8002 33.0741 37.8002C33.4918 37.8002 33.8924 37.6343 34.1877 37.3389C34.4831 37.0435 34.6491 36.6429 34.6491 36.2252V20.4752Z',
  accessControl = 'M19.6875 30.1875V31.5C19.6875 31.8481 19.5492 32.1819 19.3031 32.4281C19.0569 32.6742 18.7231 32.8125 18.375 32.8125H15.75V34.125C15.75 34.8212 15.4734 35.4889 14.9812 35.9812C14.4889 36.4734 13.8212 36.75 13.125 36.75H7.875C7.17881 36.75 6.51113 36.4734 6.01884 35.9812C5.52656 35.4889 5.25 34.8212 5.25 34.125V30.7309C5.25015 30.0347 5.52681 29.3672 6.01912 28.875L16.1779 18.7163C15.555 16.6011 15.6137 14.3436 16.3458 12.2637C17.0779 10.1839 18.4462 8.38726 20.2567 7.12865C22.0671 5.87004 24.2278 5.21331 26.4324 5.25158C28.637 5.28985 30.7736 6.02117 32.5393 7.34186C34.305 8.66254 35.6101 10.5055 36.2695 12.6096C36.929 14.7136 36.9094 16.9718 36.2135 19.064C35.5175 21.1563 34.1806 22.9763 32.3923 24.2661C30.6039 25.5559 28.4549 26.25 26.25 26.25H23.6224V28.875C23.6224 29.2231 23.4841 29.5569 23.238 29.8031C22.9918 30.0492 22.658 30.1875 22.3099 30.1875H19.6849H19.6875ZM28.875 15.75C29.5712 15.75 30.2389 15.4734 30.7312 14.9812C31.2234 14.4889 31.5 13.8212 31.5 13.125C31.5 12.4288 31.2234 11.7611 30.7312 11.2688C30.2389 10.7766 29.5712 10.5 28.875 10.5C28.1788 10.5 27.5111 10.7766 27.0188 11.2688C26.5266 11.7611 26.25 12.4288 26.25 13.125C26.25 13.8212 26.5266 14.4889 27.0188 14.9812C27.5111 15.4734 28.1788 15.75 28.875 15.75Z',
  dataAnalitics = 'M6.29928 5.22699C6.29622 4.94851 6.18266 4.68266 5.98358 4.48791C5.7845 4.29316 5.51621 4.18548 5.23773 4.18854C4.95925 4.1916 4.6934 4.30517 4.49865 4.50425C4.30391 4.70332 4.19622 4.97161 4.19928 5.25009V36.7501C4.19928 37.0286 4.30991 37.2956 4.50682 37.4925C4.70373 37.6895 4.9708 37.8001 5.24928 37.8001H36.7493C37.0278 37.8001 37.2948 37.6895 37.4917 37.4925C37.6887 37.2956 37.7993 37.0286 37.7993 36.7501C37.7993 36.4716 37.6887 36.2045 37.4917 36.0076C37.2948 35.8107 37.0278 35.7001 36.7493 35.7001H6.29928V5.22699ZM33.5993 33.6001V11.5501C33.599 11.3525 33.543 11.159 33.4377 10.9919C33.3323 10.8247 33.182 10.6906 33.0039 10.6051C32.8258 10.5196 32.6272 10.486 32.4308 10.5083C32.2345 10.5306 32.0485 10.6078 31.8941 10.7311L21.9506 18.6838L15.2201 14.8387C15.0773 14.7572 14.9175 14.7104 14.7533 14.7021C14.5892 14.6937 14.4254 14.7239 14.2751 14.7904L8.39928 17.4007V33.6001H33.5993Z',
}

enum ArrowIcons {
  leftArrow_24 = 'M10.2953 19.715C10.4851 19.8963 10.7386 19.9957 11.001 19.9918C11.2635 19.9878 11.5138 19.8809 11.6981 19.694C11.8824 19.5071 11.9858 19.2552 11.986 18.9928C11.9862 18.7303 11.8833 18.4783 11.6993 18.291L6.32932 12.999H19.9993C20.2645 12.999 20.5189 12.8937 20.7064 12.7061C20.894 12.5186 20.9993 12.2643 20.9993 11.999C20.9993 11.7338 20.894 11.4795 20.7064 11.2919C20.5189 11.1044 20.2645 10.999 19.9993 10.999H6.33632L11.7003 5.71404C11.8843 5.52682 11.9872 5.27478 11.987 5.01232C11.9868 4.74985 11.8834 4.498 11.6991 4.31109C11.5148 4.12419 11.2645 4.01724 11.002 4.0133C10.7396 4.00936 10.4861 4.10875 10.2963 4.29004L3.37032 11.112C3.25241 11.2283 3.15877 11.3669 3.09487 11.5197C3.03096 11.6725 2.99805 11.8364 2.99805 12.002C2.99805 12.1677 3.03096 12.3316 3.09487 12.4844C3.15877 12.6372 3.25241 12.7757 3.37032 12.892L10.2943 19.715H10.2953Z',
  rightArrow_24 = 'M13.704 4.2838C13.6116 4.1869 13.5006 4.10957 13.3777 4.05638C13.2548 4.00319 13.1224 3.97523 12.9885 3.97415C12.8546 3.97308 12.7218 3.99892 12.5981 4.05013C12.4743 4.10134 12.3622 4.17689 12.2682 4.27229C12.1742 4.36768 12.1003 4.48099 12.0509 4.60548C12.0016 4.72997 11.9777 4.8631 11.9808 4.99699C11.9838 5.13088 12.0138 5.26278 12.0688 5.38489C12.1238 5.50699 12.2027 5.6168 12.301 5.7078L17.67 10.9998H4C3.73478 10.9998 3.48043 11.1052 3.29289 11.2927C3.10536 11.4802 3 11.7346 3 11.9998C3 12.265 3.10536 12.5194 3.29289 12.7069C3.48043 12.8944 3.73478 12.9998 4 12.9998H17.665L12.3 18.2848C12.1206 18.4728 12.0214 18.7233 12.0235 18.9831C12.0256 19.243 12.1288 19.4918 12.3112 19.677C12.4935 19.8621 12.7408 19.9689 13.0006 19.9749C13.2604 19.9808 13.5123 19.8854 13.703 19.7088L20.628 12.8868C20.7459 12.7705 20.8396 12.6319 20.9035 12.4792C20.9674 12.3264 21.0003 12.1624 21.0003 11.9968C21.0003 11.8312 20.9674 11.6672 20.9035 11.5144C20.8396 11.3616 20.7459 11.2231 20.628 11.1068L13.703 4.2838H13.704Z',
}

export const tags = {
  'All topics': true,
  App: false,
  Management: false,
  CMR: false,
  'Big data': false,
  Media: false,
  Future: false,
  CIO: false,
  Startup: false,
  Team: false,
  Data: false,
  'Data analytics': false,
  'Information security': false,
  Proxy: false,
}

export const iconsData: IIconsData = {
  SocialIcons: [
    SocialIcons.facebook,
    SocialIcons.twitter,
    SocialIcons.linkedin,
    SocialIcons.youtube,
    SocialIcons.dribble,
    SocialIcons.behance,
  ],

  ShareSocialIcons: [
    SocialIcons.linkedin,
    SocialIcons.facebook,
    SocialIcons.twitter,
    SocialIcons.google,
    SocialIcons.youtube,
  ],

  PopularPosts: [
    {
      id: 1,
      img: './assets/images/popular_1.png',
      date: '22 June 2022',
      title: 'ISO 13485 compliance of medical devices',
      link: '#',
      linkText: 'Read more',
      view: 424,
    },
    {
      id: 2,
      img: './assets/images/popular_2.png',
      date: '22 June 2022',
      title: 'Business analysis helps you  in finance',
      link: '#',
      linkText: 'Read more',
      view: 324,
    },
    {
      id: 3,
      img: './assets/images/popular_3.png',
      date: '22 June 2022',
      title: 'Benefits of telemedicine in nursing homes',
      link: '#',
      linkText: 'Read more',
      view: 224,
    },
    {
      id: 4,
      img: './assets/images/popular_4.png',
      date: '22 June 2022',
      title: '5 web portal examples your business can learn from',
      link: '#',
      linkText: 'Read more',
      view: 124,
    },
  ],

  RelatedPost: [
    {
      id: 1,
      img: './assets/images/related_1.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'App',
      link: '#',
    },
    {
      id: 2,
      img: './assets/images/related_2.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'App',
      link: '#',
    },
    {
      id: 3,
      img: './assets/images/related_3.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'CIO',
      link: '#',
    },
    {
      id: 4,
      img: './assets/images/related_1.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'Media',
      link: '#',
    },
    {
      id: 5,
      img: './assets/images/related_2.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'App',
      link: '#',
    },
    {
      id: 6,
      img: './assets/images/related_3.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'App',
      link: '#',
    },
    {
      id: 7,
      img: './assets/images/related_1.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'Media',
      link: '#',
    },
    {
      id: 8,
      img: './assets/images/related_2.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'App',
      link: '#',
    },
    {
      id: 9,
      img: './assets/images/related_3.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'App',
      link: '#',
    },
    {
      id: 10,
      img: './assets/images/related_1.png',
      date: '22 June 2022',
      title: 'Sed ut perspiciatis unde omnis at vero blanditils',
      text: 'Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...',
      tag: 'Management',
      link: '#',
    },
  ],

  Tags: [
    {
      id: 1,
      tag: 'All topics',
    },
    {
      id: 2,
      tag: 'App',
    },
    {
      id: 3,
      tag: 'Management',
    },
    {
      id: 4,
      tag: 'CMR',
    },
    {
      id: 5,
      tag: 'Big Data',
    },
    {
      id: 6,
      tag: 'Media',
    },
    {
      id: 7,
      tag: 'Future',
    },
    {
      id: 8,
      tag: 'CIO',
    },
    {
      id: 9,
      tag: 'Startup',
    },
    {
      id: 10,
      tag: 'Team',
    },
    {
      id: 11,
      tag: 'Data',
    },
    {
      id: 12,
      tag: 'Data analytics',
    },
    {
      id: 13,
      tag: 'Information security',
    },
    {
      id: 14,
      tag: 'Proxy',
    },
  ],

  Categories: [
    {
      id: 1,
      title: 'Software development',
    },
    {
      id: 2,
      title: 'Information security',
    },
    {
      id: 3,
      title: 'Internet of things',
    },
    {
      id: 4,
      title: 'Digital transformation',
    },
    {
      id: 5,
      title: 'Healthcare it',
    },
  ],

  ServiceCards: [
    {
      id: 1,
      img: './assets/icons/icon_brain_isometric_3d.svg',
      title: 'Machine learning',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 2,
      img: './assets/icons/icon_trending_lines_isometric_3d.svg',
      title: 'Embed analytics',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 3,
      img: './assets/icons/icon_key_isometric_3d.svg',
      title: 'Access control',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 4,
      img: './assets/icons/icon_data_area_isometric_3d.svg',
      title: 'Data analytics',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 5,
      img: './assets/icons/icon_data_pie_isometric_3d.svg',
      title: 'Big data consulting',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 6,
      img: './assets/icons/icon_bot_isometric_3d.svg',
      title: 'Artificial intelligence',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '#',
      linkText: 'Read more',
    },
  ],

  Blogs: [
    {
      id: 1,
      img: './assets/images/img_8.png',
      time: '22 June 2022',
      title: 'ISO 13485 compliance of medical devices',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 2,
      img: './assets/images/img_9.png',
      time: '22 June 2022',
      title: 'Business analysis helps you  in finance',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 3,
      img: './assets/images/img_10.png',
      time: '22 June 2022',
      title: '5 web portal examples your business can learn from',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 4,
      img: './assets/images/img_8.png',
      time: '22 June 2022',
      title: 'ISO 13485 compliance of medical devices',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 5,
      img: './assets/images/img_9.png',
      time: '22 June 2022',
      title: 'Business analysis helps you  in finance',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 6,
      img: './assets/images/img_10.png',
      time: '22 June 2022',
      title: '5 web portal examples your business can learn from',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 7,
      img: './assets/images/img_8.png',
      time: '22 June 2022',
      title: 'ISO 13485 compliance of medical devices',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
    {
      id: 8,
      img: './assets/images/img_9.png',
      time: '22 June 2022',
      title: 'Business analysis helps you  in finance',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
      link: '#',
      linkText: 'Read more',
    },
  ],

  LogoIcon: [
    './assets/logo/logo_1.png',
    './assets/logo/logo_7.png',
    './assets/logo/logo_3.png',
    './assets/logo/logo_4.png',
    './assets/logo/logo_5.png',
    './assets/logo/logo_6.png',
  ],

  LogoIconCustomers: [
    {
      id: 1,
      url: './assets/logo/customers/logo_1.png',
    },
    {
      id: 2,
      url: './assets/logo/customers/logo_2.png',
    },
    {
      id: 3,
      url: './assets/logo/customers/logo_3.png',
    },
    {
      id: 4,
      url: './assets/logo/customers/logo_4.png',
    },
    {
      id: 5,
      url: './assets/logo/customers/logo_5.png',
    },
    {
      id: 6,
      url: './assets/logo/customers/logo_6.png',
    },
  ],

  ServicesPoints: {
    free: ['For small teams – 5 users', 'Community support'],
    lite: ['For small teams – 15 users', 'Individual support', 'Individual data – 60GB'],
    basic: [
      'For big teams – 30 users',
      'Individual support',
      'Individual data – 120GB',
      'Advanced permissions',
    ],
    enterprises: [
      'Unlimited team members',
      'Individual support',
      'Unlimited Individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
  },

  Testimonials: [
    {
      id: 1,
      logo: './assets/images/img_person_1.png',
      title: 'Alex Bern',
      subtitle: 'CEO by PixelPerfect',
      text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”',
    },
    {
      id: 2,
      logo: './assets/images/img_person_2.png',
      title: 'Ruben Chifundo',
      subtitle: 'CEO by NOX',
      text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”',
    },
    {
      id: 3,
      logo: './assets/images/img_person_3.png',
      title: 'Tigran Nazaret',
      subtitle: 'Data analyst',
      text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”',
    },
    {
      id: 4,
      logo: './assets/images/img_person_1.png',
      title: 'Alex Bern',
      subtitle: 'CEO by PixelPerfect',
      text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”',
    },
    {
      id: 5,
      logo: './assets/images/img_person_2.png',
      title: 'Ruben Chifundo',
      subtitle: 'CEO by NOX',
      text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”',
    },
  ],

  ArrowIcons: {
    leftArrow_24: ArrowIcons.leftArrow_24,
    rightArrow_24: ArrowIcons.rightArrow_24,
  },

  HomeBenefits: [
    {
      title: 'Machine learning',
      path: BenefitIcons.machineLearning,
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    },
    {
      title: 'Embed analytics',
      path: BenefitIcons.embedAnalitics,
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    },
    {
      title: 'Access control',
      path: BenefitIcons.accessControl,
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    },
    {
      title: 'Data analytics',
      path: BenefitIcons.dataAnalitics,
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    },
  ],
}
