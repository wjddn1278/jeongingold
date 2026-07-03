function f(n){return Number(n).toLocaleString('ko-KR')}function gen(){let s=+sell.value,b=+buy.value,d=new Date(),w=['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];let t=`[정인보석]
${d.getMonth()+1}월 ${d.getDate()}일 ${w[d.getDay()]} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')} 기준시세

판매 ${f(s)}

매입 ${f(b)}

#3대검인 99.9 주물금 최종구매가

::1돈(3.75g) #${f(s+4000)}

::5돈(18.75g) #${f(s*5+15000)}

::10돈(37.5g) #${f(s*10+20000)}

#GBK 999.9 골드바 최종구매가

::1돈(3.75g) #${f(s+10000)}

::2돈(7.5g) #${f(s*2+18000)}

::3돈(11.25g) #${f(s*3+23000)}

::5돈(18.75g) #${f(s*5+35000)}

::10돈(37.5g) #${f(s*10+50000)}

https://open.kakao.com/o/gCxht7rh

전화문의
02-747-1687
010-9619-5937`;out.value=t;}function copyText(){out.select();document.execCommand('copy');alert('복사되었습니다.')}