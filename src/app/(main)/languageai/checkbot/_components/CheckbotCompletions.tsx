import { useCheckbotStore } from '../_stores/useCheckbotStore';
import { useShallow } from 'zustand/shallow';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

const CheckbotCompletions = () => {
  const { completions } = useCheckbotStore(
    useShallow((state) => ({
      completions: state.completions
    })),
  );

  return (
    <Tabs className="h-full border-t" defaultValue='completion0'>
      <TabsList className='w-full rounded-none'>
        {completions.map((_, index) =>
          <TabsTrigger
            value={`completion${index}`}
            key={`completionTrigger${index}`}

          >Result {index + 1}</TabsTrigger>
        )}
      </TabsList>
      {completions.map((completion, index) =>
        <TabsContent
          value={`completion${index}`}
          key={`completionContent${index}`}
          className='p-2 text-sm'
        >
          {completion}
        </TabsContent>
      )}
    </Tabs>
  )
}

export default CheckbotCompletions