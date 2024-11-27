import { cn } from "@reactive-resume/utils";

type Props = {
  title?: React.ReactNode;
  time?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
};

export const BaseListItem = ({ title, time, description, className, onClick }: Props) => (
  <div
    className={cn(
      "flex cursor-pointer items-center rounded-md bg-secondary/50 p-4 transition-colors hover:bg-secondary/30",
      className,
    )}
    onClick={onClick}
  >
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-2 space-x-4">
        <h4 className="line-clamp-1 truncate text-2xl font-semibold">{title}</h4>
        <p className="!m-0 text-sm font-thin opacity-75">{time}</p>
        <div
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            __html: description!,
          }}
          className="!m-0 line-clamp-5 pt-2 text-base"
        />
      </div>
    </div>
  </div>
);
