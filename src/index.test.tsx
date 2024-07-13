 
 
import { render, screen } from '@testing-library/react';
import List from "@/components/List/index";
 
interface UserItem {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export type UserData = UserItem[];
 
export interface MyComponentProps {
  typedValue: string;
  users: UserData;
  handleNext: () => void;
  handlePrev: () => void;
  isFetching: boolean;
}

// Mock props for testing
const mockProps: MyComponentProps = {
  typedValue: "test", 
  users: [], 
  handleNext: jest.fn(),
  handlePrev: jest.fn(),
  isFetching: false,
};

describe('List Component', () => {
  it('should render a button with class "ttt"', () => {
    render(<List {...mockProps} />);
    
   
    const buttonElement = screen.getByRole('button', { name: /efeff/i }); 
    
 
    expect(buttonElement).toBeInTheDocument();
  });
});
 