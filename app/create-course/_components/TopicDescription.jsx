import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React,{useContext} from 'react';

const TopicDescription = () => {
  const {UserCourseInput, setUserCourseInput}=useContext(UserInputContext);

  const  handleInputChange = (fieldName , value)=>{
    setUserCourseInput(prev =>({
        ...prev,
        [fieldName]:value
    }))
  }

    return (
        <div className='mx-20 lg:mx-40'>
           {/* Input topic */}
           <div>
            <label className='text-sm'>💡 Write the topic for which you want to generate a course (e.g python, html etc):</label>
            <Input placeholder={'Topic'} defaultValue={UserCourseInput?.topic} className='h-14 text-xl' onChange={(e)=> handleInputChange('topic',e.target.value)}/>
           </div>
           <div className = "mt-6">
            <label className='text-sm'>📝 Tell use more about your course what to want to more </label>
 <Textarea placeholder={'About your Course'} defaultValue={UserCourseInput?.description}
 onChange={(e)=> handleInputChange('description',e.target.value)} className='h-25 text-xl' />
           </div>
           {/* textarea desc */}
        </div>
    );
}

export default TopicDescription;
