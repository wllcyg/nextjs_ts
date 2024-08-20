/**
 * ...id
 * 这个就可以截取路由上面多个参数
 * 
 */
import { useRouter } from 'next/router'
const Blogs = () => {
    const router = useRouter()
    console.log('this is router query',router.query)
    return (
     <div>
      <h1>
         this is blogs 
      </h1>
  </div>
 );
};

export default Blogs;