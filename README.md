1.prisma 설치 : npm i prisma -D
2.prisma 불러오기 : npx prisma init 
3. schema.prisma에 테이블 객체 생성하기
4.scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
5.scoop install pscale mysql
6.로그인 : pscale auth login
	* 명령어 확인 : pscale database 
	* ex. 데이터 베이스 list : pscale database list
7.pscale connect xxxx //env에 적으면 위험하니까(connect : Create a secure connection to a database and branch for a local client) 		
8.env에 DATABASE_URL="mysql://127.0.0.1:63675/xxxx"를 적음 
9.previewFeatures = ["referentialIntegrity"], referentialIntegrity = "prisma"추가
	* pscale connect를 하고 난 뒤에 push를 해줘야 한다. (로그인, 컨넥트, 푸시 순)
10.npx prisma db push
	* npx prisma studio : 시각화 
11.클라이언트 설치 : npm install @prisma/client 
	* -D 옵션을 사용하지 않은 이유 : 백엔드에서 이 client를 직접 사용할것이기 때문(= 이것은 'development' dependency가 아님 서비스에서 직접 사용할 dependency니까)
12.npx prisma generate : client 생성 확인 가능 

13.vo 같은 것들을 @prisma/client에서 import 하여 만듦
14.pages/api 아래에 db와 연결하는 명령 수행 및 res 보냄 (req : NextApiRequest, res : NextApiResponse)
15.클라이언트 -> 14번 호출 db와 간접적 연결 가능
