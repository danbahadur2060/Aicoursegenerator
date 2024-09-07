import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const TopicDescription = () => {
    return (
        <div className='mx-20 lg:mx-40'>
           {/* Input topic */}
           <div>
            <label className='text-sm'>💡 Write the topic for which you want to generate a course (e.g python, html etc):</label>
            <Input placeholder={'Topic'} />
           </div>
           <div className = "mt-6">
            <label className='text-sm'>📝 Tell use more about your course what to want to more </label>
 <Textarea placeholder={'About your Course'}
  />
           </div>
           {/* textarea desc */}
        </div>
    );
}

export default TopicDescription;
